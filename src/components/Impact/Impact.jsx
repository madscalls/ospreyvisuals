import "./Impact.css";

function Impact() {
  const projects = [
    {
      imageLabel: "Storefront Transformation",
      title: "Storefront Transformation",
      description:
        "Turned a low-visibility storefront into a high-impact brand presence that customers notice from down the street.",
      result: "More foot traffic within the first week",
    },
    {
      imageLabel: "Vehicle Wrap Rebrand",
      title: "Vehicle Wrap Rebrand",
      description:
        "Transformed a plain fleet van into a professional mobile billboard reaching thousands of potential customers daily.",
      result: "New calls coming in from people who saw the van",
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
                <span className="impact__image-label">
                  {project.imageLabel}
                </span>

                <div className="impact__toggle">
                  <span className="impact__pill impact__pill--before">
                    Before
                  </span>
                  <span className="impact__arrow">›</span>
                  <span className="impact__pill impact__pill--after">
                    After
                  </span>
                </div>
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
