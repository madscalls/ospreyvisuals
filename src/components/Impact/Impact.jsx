import "./Impact.css";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";
import boatBefore from "../../assets/boat.png";
import boatAfter from "../../assets/boat2.png";
import vanBefore from "../../assets/van.png"; // swap with your actual van before image
import vanAfter from "../../assets/van1.png"; // swap with your actual van after image

function Impact() {
  const projects = [
    {
      title: "Storefront Transformation",
      description:
        "Turned a low-visibility storefront into a high-impact brand presence that customers notice from down the street.",
      result: "More foot traffic within the first week",
      beforeSrc: boatBefore,
      afterSrc: boatAfter,
    },
    {
      title: "Vehicle Wrap Rebrand",
      description:
        "Transformed a plain fleet van into a professional mobile billboard reaching thousands of potential customers daily.",
      result: "New calls coming in from people who saw the van",
      beforeSrc: vanBefore,
      afterSrc: vanAfter,
    },
  ];

  return (
    <section className="impact" id="impact">
      <div className="impact__container">
        <div className="impact__heading">
          <p className="impact__eyebrow">OUR IMPACT</p>
          <h2 className="impact__title">Real Transformations</h2>
          <p className="impact__subtitle">
            The right visuals don&apos;t just look better—they bring in more
            business. Here&apos;s what that looks like in practice.
          </p>
        </div>

        <div className="impact__grid">
          {projects.map((project) => (
            <article key={project.title} className="impact__card">
              <div className="impact__image">
                <BeforeAfterSlider
                  beforeSrc={project.beforeSrc}
                  afterSrc={project.afterSrc}
                />
              </div>

              <div className="impact__content">
                <h3 className="impact__card-title">{project.title}</h3>
                <p className="impact__description">{project.description}</p>
                <p className="impact__result">• {project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
