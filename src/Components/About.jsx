import "../Styles/About.scss";

const About = () => {
  const Objectives = [
    {
      id: 1,
      title: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },

    {
      id: 2,
      title: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },

    {
      id: 3,

      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <section className="about-section">
      <div className="about-div">
        {/* Text Section */}
        <div className="about-text-section">
          <h1>What's different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams{" "}
          </p>
        </div>

        {/* Image Section */}
        <div className="about-image-section">
          <div>
            {" "}
            {Objectives.map((objective) => (
              <div key={objective.id}>
                <span className="image-section-span">{objective.id}</span>
                {objective.title}
                <p className="image-section-p">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
