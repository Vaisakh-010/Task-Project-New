import "./Testimonials.css";
import { useState } from "react";

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t1.png";
import t6 from "../../assets/images/t2.png";
import TestimonialsNew from "../../components/TestimonialsNew/TestimonialsNew";

const testimonials = [
  {
    id: 1,
    name: "James Andrews",
    role: "CEO and Founder of the Company",
    image: t1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Marketing Director",
    image: t2,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    name: "John Carter",
    role: "Business Consultant",
    image: t3,
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials">
      <div className="testimonial-top">
        <div className="gallery">
          {[t1, t2, t3, t4, t5, t6].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`gallery-img img-${index}`}
            />
          ))}
        </div>

        <h2>TESTIMONIALS</h2>
      </div>

      <div className="testimonial-content">
        <img
          src={testimonials[active].image}
          alt={testimonials[active].name}
          className="profile-image"
        />

        <p>{testimonials[active].text}</p>

        <h3>{testimonials[active].name}</h3>

        <span>{testimonials[active].role}</span>

        <div className="navigation">
          <button onClick={prevSlide}>←</button>

          <div>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>

          <button onClick={nextSlide}>→</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
