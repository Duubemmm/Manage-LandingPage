import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarAli from "../assets/avatar-ali.png"
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
        "Manage has supercharged our team's workflow. The ability to maintain visibility and collaboration is essential.",
    },
    {
      id: "02",
      img: AvatarAnisha,
      name: "Anisha Li",
      review:
        "We’ve been able to cancel so many other subscriptions since using Manage. No more cross-channel confusion!",
    },
    {
      id: "03",
      img: AvatarRichard,
      name: "Richard Watts",
      review:
        "Manage allows us to provide structure and process. It keeps everyone on the same page effortlessly.",
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
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
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Testimonials;
