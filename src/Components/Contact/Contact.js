import "./Contact.scss";
import email from "../../email.png";
import linkedin from "../../linkedin.png";
import github from "../../github.png";

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="get-in-touch">
        Looking to get in touch? Feel free to reach out to me here
      </div>
      <div className="link-container">
        <a
          href="https://github.com/mmarsden89"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <img src={github} className="contact-icon" alt="github" />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/matthewjmarsden/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <img src={linkedin} className="contact-icon" alt="linkedin" />
          LinkedIn
        </a>
        <a
          href="mailto:mattmarsdendev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <img src={email} className="contact-icon" alt="email" />
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
