import "./Contact.css";
import contactImage from "../../assets/images/contact.png";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>

        <div className="contact-card">
          <h2>GET IN TOUCH</h2>

          <form>
            <div className="form-grid">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />

              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
            </div>

            <textarea rows="6" placeholder="Enter your comments here any?" />

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
