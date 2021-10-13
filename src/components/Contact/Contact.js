import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>I'm pretty easy to find!</h1>
      <div className="contact-icon-container">
        <a
          href="https://github.com/mmarsden89/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <p>github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/matthewjmarsden/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <p>linkedin</p>
        </a>
        <a
          href="mailto:mattmarsdendev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>email</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
