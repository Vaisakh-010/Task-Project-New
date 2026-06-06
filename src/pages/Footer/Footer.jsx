import "./Footer.css";

import locationIcon from "../../assets/icons/Group.png";
import phoneIcon from "../../assets/icons/mobile.png";
import mailIcon from "../../assets/icons/mail.png";
import arrowIcon from "../../assets/icons/arrow.png";

import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/x.png";
import linkedinIcon from "../../assets/icons/in.png";
import instagramIcon from "../../assets/icons/insta.png";
import pinterestIcon from "../../assets/icons/pinterest.png";
import youtubeIcon from "../../assets/icons/tube.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Newsletter</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />

            <button type="submit">
              <img src={arrowIcon} alt="Arrow" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-about">
          <h2>ORANGE PR</h2>

          <p>
            Orange PR is Dubai's leading communication company, specializing in
            cultural, lifestyle, fashion and art. Our agency was founded on a
            culture of smart strategic thinking, creativity, and innovation that
            delivers successful solutions to our local, national and
            international customer base.
          </p>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>

          <ul>
            <li>HOME</li>
            <li>PR SERVICES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>CONTACT INFO</h4>

          <p>
            <img src={locationIcon} alt="Location" />
            FD - First Floor Incubator Building, Masdar City, Abu Dhabi, United
            Arab Emirates
          </p>

          <p>
            <img src={phoneIcon} alt="Phone" />
            +971 58 58 7 3195
          </p>

          <p>
            <img src={mailIcon} alt="Mail" />
            mail@orangepragency.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2025 Orange PR Agency. | Design & Development by MightyWarners
          Technologies
        </p>

        <div className="social-icons">
          <img src={facebookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={linkedinIcon} alt="LinkedIn" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={pinterestIcon} alt="Pinterest" />
          <img src={youtubeIcon} alt="YouTube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
