import "./Why.css";
import prices from "../../assets/icons/Pricingthatmakes.png";
import direct from "../../assets/icons/WorkDirectlyWith.png";
import design from "../../assets/icons/WeHelpyouDesign.png";
import hands from "../../assets/icons/Builttomakeyour.png";

function Why() {
  const reasons = [
    {
      icon: <img src={prices} alt="Pricetag" className="Why__icons" />,
      title: "Pricing That Makes Sense for Small Businesses",
      description:
        "You shouldn't need an agency budget to look professional. We deliver high-quality work at rates that actually work for growing businesses.",
    },
    {
      icon: <img src={direct} alt="icon" className="Why__icons" />,
      title: "Work Directly With Us—No Middlemen",
      description:
        "We're local and we're accessible. You get face-to-face service, real answers to your questions, and people who care about your outcome.",
    },
    {
      icon: <img src={design} alt="pencil and ruler" className="Why__icons" />,
      title: "We Help You Design It Right",
      description:
        "Not sure what you need? That's okay. We walk you through the process, offer guidance, and make sure the final product actually works for your business.",
    },
    {
      icon: <img src={hands} alt="Hand Icon" className="Why__icons" />,
      title: "Built to Make Your Business Look Professional",
      description:
        "Every project we take on is designed to help you attract more customers—not just look pretty. Results matter to us as much as they do to you.",
    },
  ];

  return (
    <section className="why" id="why-us">
      <div className="why__container">
        <div className="why__content">
          <p className="why__eyebrow">WHY OSPREY VISUALS</p>
          <h2 className="why__title">
            Built for Businesses That
            <br />
            Mean Business
          </h2>
          <p className="why__description">
            We don't just make things look good—we make them work. Your brand is
            your first impression, and we make sure it's the right one.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="why__card">
              <div className="why__icon">{reason.icon}</div>
              <h3 className="why__card-title">{reason.title}</h3>
              <p className="why__card-description">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
