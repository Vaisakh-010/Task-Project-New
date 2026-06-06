import { useState } from "react";
import "./Services.css";

import mediaImg from "../../assets/images/journalist.png";
import influencerImg from "../../assets/images/bloger.png";
import eventsImg from "../../assets/images/studio.png";

function Services() {
  const [activeCard, setActiveCard] = useState(1);

  const services = [
    {
      id: 1,
      title: "Media",
      subtitle: "Relations",
      description:
        "Orange PR is Dubai's leading communication company specializing in media relations.",
      image: mediaImg,
    },
    {
      id: 2,
      title: "Influencer",
      subtitle: "Management",
      description:
        "Connecting brands with influencers to create impactful campaigns.",
      image: influencerImg,
    },
    {
      id: 3,
      title: "Events",
      subtitle: "",
      description:
        "Corporate events, product launches and large-scale experiences.",
      image: eventsImg,
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-left">
          <h2>
            WHAT WE DO
            <br />
            EXPERTS
          </h2>

          <p className="brand-text">We build brands.</p>

          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="read-more">
            <button className="read-btn">READ MORE</button>

            <span className="counter">
              <span className={activeCard === 1 ? "active-count" : ""}>01</span>
              {" / "}
              <span className={activeCard === 2 ? "active-count" : ""}>02</span>
              {" / "}
              <span className={activeCard === 3 ? "active-count" : ""}>03</span>
            </span>
          </div>
        </div>

        <div className="services-right">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onMouseEnter={() => setActiveCard(service.id)}
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <div className="overlay">
                <div className="content">
                  <h3>{service.title}</h3>

                  <h4>{service.subtitle}</h4>

                  <p>{service.description}</p>

                  <button className="arrow-btn">→</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
