import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-center">
          <h1>Let's connect</h1>
          <p>
            I am open to chat and collaborations! If you have questions about my
            work or want to explore potential opportunities, please feel free to
            get in touch!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon className="mail-icon" icon={faEnvelope} />
              <p>hhhs122@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
