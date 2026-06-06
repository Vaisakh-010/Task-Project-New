import "./About.css";

import aboutImage from "../../assets/images/About.png";

import clientIcon from "../../assets/icons/human.png";
import eventIcon from "../../assets/icons/events.png";
import experienceIcon from "../../assets/icons/badge.png";
import materialIcon from "../../assets/icons/request.png";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>
            Think. Create.
            <br />
            Promote.
          </h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Orange PR Team" />
          </div>

          <div className="about-text">
            <p>
              Orange PR is Dubai's leading communication company, specializing
              in cultural, lifestyle, fashion and art. Our agency was founded on
              a culture of smart strategic thinking, creativity, and innovation
              that delivers successful solutions to our local, national, and
              international customer base. Our ability to create and execute
              dynamic, forward-thinking PR campaigns quickly, while maintaining
              quality, increasing visibility, and achieving the targeted
              objectives or aims, is the key to our success. By offering a full
              turn-key solution.
            </p>

            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>

        <div className="stats-wrapper">
          <div className="stat-card">
            <div className="about-block">
              <img src={clientIcon} alt="Clients" className="stat-icon" />
            </div>

            <div>
              <p>Our Clients</p>
              <h3>208</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="about-block">
              <img src={eventIcon} alt="Events" className="stat-icon" />
            </div>

            <div>
              <p>Events</p>
              <h3>355</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="about-block">
              <img
                src={experienceIcon}
                alt="Experience"
                className="stat-icon"
              />
            </div>

            <div>
              <p>Years of Experience</p>
              <h3>10</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="about-block">
              <img src={materialIcon} alt="Materials" className="stat-icon" />
            </div>

            <div>
              <p>Materials</p>
              <h3>15049</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
