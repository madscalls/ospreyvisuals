import "./Impact.css";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";
// import boatBefore from "../../assets/boat.png";
// import boatAfter from "../../assets/boat2.png";
// import vanBefore from "../../assets/van.png"; // swap with your actual van before image
import vanAfter from "../../assets/van1.png"; // swap with your actual van after image

import copBefore from "../../assets/copcarbefore.jpg";
import copAfter from "../../assets/copcarafter.jpg";

import motorBefore from "../../assets/motorbefore.jpg";
import motorAfter from "../../assets/motorafter.jpg";

function Impact() {
  const projects = [
    {
      title: "Vehicle Transformation",
      description:
        "We turned a plain vehicle into a powerful mobile advertisement with custom graphics designed to build brand recognition everywhere it goes. From vinyl lettering and partial wraps to full fleet branding, your vehicle becomes a professional extension of your business.",
      result: "More visibility, instantly",
      beforeSrc: copBefore,
      afterSrc: copAfter,
    },
    {
      title: "Boat Transformation",
      description:
        "We upgraded this Yamaha cowling wih custom marine-grade vinyl, showcasing how professional boat graphics can restore and personalize you vessel from registration numbers and names to full wraps and engine decals.",
      result:
        "Custom boat numbers, names, wraps, and marine graphics built to stand out on the water",
      beforeSrc: motorBefore,
      afterSrc: motorAfter,
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
