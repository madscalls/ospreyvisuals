import { useState } from "react";
import "./QuoteForm.css";

function QuoteForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = {
      access_key: "c7447337-8034-4733-b923-1186daaad478",
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      details: formData.get("details"),
      subject: "New Quote Request – Osprey Visuals",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (json.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="quote-form" id="contact">
      <div className="quote-form__container">
        <div className="quote-form__header">
          <p className="quote-form__eyebrow">LET&apos;S TALK</p>
          <h2 className="quote-form__title">Get Your Free Quote</h2>
          <p className="quote-form__subtitle">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
          <div className="quote-form__pill">• Takes less than 60 seconds</div>
        </div>

        <div className="quote-form__card">
          {status === "success" ? (
            <div className="quote-form__success">
              <p>✓ Thanks! We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form className="quote-form__form" onSubmit={handleSubmit}>
              <div className="quote-form__grid">
                <div className="quote-form__field">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="quote-form__field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@business.com"
                    required
                  />
                </div>

                <div className="quote-form__field">
                  <label htmlFor="business">Business Name</label>
                  <input
                    id="business"
                    type="text"
                    name="business"
                    placeholder="Your Business LLC"
                  />
                </div>

                <div className="quote-form__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="quote-form__field">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    What do you need?
                  </option>
                  <option value="branding">Branding & Logo Design</option>
                  <option value="signage">Signage & Print</option>
                  <option value="vehicle-wraps">Vehicle Wraps & Vinyl</option>
                  <option value="fabrication">Custom Fabrication</option>
                  <option value="digital">Digital & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="quote-form__field">
                <label htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  rows="6"
                  placeholder="Tell us about your project—what are you looking for, any specific ideas or requirements?"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="quote-form__error">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="quote-form__button"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  "Sending…"
                ) : (
                  <>
                    "Get My Quote <span>✈</span>"
                  </>
                )}
              </button>

              <p className="quote-form__note">
                ✓ We&apos;ll get back to you within 24 hours. No commitment
                required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
