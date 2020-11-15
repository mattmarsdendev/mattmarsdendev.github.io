import "./Contact.scss";

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="link-container">
        <a
          href="https://github.com/mmarsden89"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/matthewjmarsden/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mattmarsdendev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          Email
        </a>
      </div>
      <div>Looking to get in touch? Feel free to reach out to me here</div>
    </div>
  );
};

export default Contact;
