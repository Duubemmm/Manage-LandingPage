import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarAli from "../assets/avatar-ali.png";
import AvatarAnisha from "../assets/avatar-anisha.png";
import AvatarRichard from "../assets/avatar-richard.png";
import AvatarShanai from "../assets/avatar-shanai.png";
import "../styles/Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      id: "00",
      img: AvatarShanai,
      name: "Shanai Ross",
      review:
        "Manage has supercharged our team's workflow. The ability to maintain visibility and collaboration is essential.",
    },

    {
      id: "01",
      img: AvatarAli,
      name: "Ali Bravo",
      review:
        "We have been able to cancel so many other subscriptions since usig Manage. There is no more cross-channel confusion, and everyone is much more focused.",
    },
    {
      id: "02",
      img: AvatarAnisha,
      name: "Anisha Li",
      review:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      id: "03",
      img: AvatarRichard,
      name: "Richard Watts",
      review:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recmmending them to everyone I talk to!",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What they’ve said</h2>
      <Slider {...sliderSettings} className="testimonials-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.img}
              alt={`${testimonial.name}'s avatar`}
              className="testimonial-avatar"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </Slider>
      <div className="testimonials-button-wrapper">
        <button className="cta-button" aria-label="Get Started with Manage">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
