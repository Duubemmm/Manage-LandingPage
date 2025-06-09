import "../styles/Hero.scss";
import IllustrationImage from "../assets/illustration-intro.svg";
const Hero = () => {
  return (
    <section>
      <div className="hero-div">
        {/* Text Section */}
        <div className="hero-text-section">
          <h2>Bring everyone together to build better products</h2>
          <p>
            Manage makes it simple for software teams to plan day to day tasks
            while keeping the larger team goals in view{" "}
          </p>
          <button aria-label="Get Started with Manage">Get Started</button>
        </div>

        {/* Image Section */}
        <div className="hero-image-section">
          <img
            src={IllustrationImage}
            alt="Illustration Image"
            aria-label="Illustration Image of Manage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
