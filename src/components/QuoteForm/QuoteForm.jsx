import "./QuoteForm.css";

function QuoteForm() {
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
          <form className="quote-form__form">
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

            <button type="submit" className="quote-form__button">
              Get My Quote <span>✈</span>
            </button>

            <p className="quote-form__note">
              ✓ We&apos;ll get back to you within 24 hours. No commitment
              required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
