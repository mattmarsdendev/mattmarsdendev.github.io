import trividuhphone from "./trividuhphone.png";
import trividuhimg from "./trividuh.png";
import "./Trividuh.scss";

const Trividuh = () => {
  const newWindow = (e) => {
    window.open(e.target.id, "mywin", "left=20,top=20,width=480,height=800");
  };
  return (
    <div className="trividuh-container">
      <a
        href="https://mmarsden89.github.io/trividuh"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={trividuhimg}
          className="portfolio-image"
          alt="trividuh computer"
        />
      </a>
      <div className="desc-cont">
        <p className="portfolio-desc">
          A trivia application (and great timekiller) built with JavaScript and
          React. Answer questions, earn points and unlock new question sets!
        </p>
        <div className="portfolio-links">
          <a
            href="https://mmarsden89.github.io/trividuh/"
            target="_blank"
            rel="noreferrer"
          >
            deployed app
          </a>
          <a
            href="https://github.com/mmarsden89/trividuh"
            target="_blank"
            rel="noreferrer"
          >
            front-end repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trividuh;
