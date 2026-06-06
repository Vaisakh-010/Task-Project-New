import "./Choose.css";

import choose1 from "../../assets/images/stat.png";
import choose2 from "../../assets/images/women.png";
import choose3 from "../../assets/images/group1.png";

function Choose() {
  const features = [
    {
      number: "01",
      title: "MARKET ENTRY EXPERTISE",
      description:
        "We provide end-to-end PR and digital marketing solutions for businesses entering India.",
      image: choose1,
      color: "#A1B6C5",
    },
    {
      number: "02",
      title: "STRONG MEDIA RELATIONSHIPS",
      description:
        "Our network spans top Indian publications, ensuring maximum visibility for your brand.",
      image: choose2,
      color: "#FD9073",
    },
    {
      number: "03",
      title: "LOCALIZED STORYTELLING",
      description:
        "We tailor messaging to resonate with Indian consumers, investors, and stakeholders.",
      image: choose3,
      color: "#FBB78C",
    },
  ];

  return (
    <section className="why-choose">
      <div className="top-box">
        <h2>WHY CHOOSE CONCEPT PR?</h2>
      </div>

      <div className="choose-cards">
        {features.map((item) => (
          <div
            key={item.number}
            className="choose-card"
            style={{ backgroundColor: item.color }}
          >
            <span className="card-number">{item.number}</span>

            <img src={item.image} alt={item.title} className="card-image" />

            <div className="card-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Choose;
