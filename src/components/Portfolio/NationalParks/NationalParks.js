import nationalphone from "./nationalparkphone.png";
import nationalimg from "./nationalparks.png";
import "./NationalParks.scss";

const NationalParks = () => {
  const newWindow = (e) => {
    window.open(e.target.id, "mywin", "left=20,top=20,width=480,height=800");
  };
  return (
    <div className="portfolio-item">
      <div className="color-block">
        <img
          src={nationalphone}
          className="phone-image"
          onClick={(e) => newWindow(e)}
          id="https://mmarsden89.github.io/national-park"
          alt="national park phone"
        />
      </div>
      <a
        href="https://mmarsden89.github.io/national-park"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={nationalimg}
          className="portfolio-image"
          alt="national park computer"
        />
      </a>
      <div className="desc-cont">
        <p className="portfolio-desc">
          I wanted a place to keep track of the national parks I've been to so I
          created a full stack application to do so! Client was built using
          JavaScript and React and the API was built using Node, Express and
          MongoDB with authorization handled by Auth0.
        </p>
        <div className="portfolio-links">
          <a
            href="https://mmarsden89.github.io/national-park"
            target="_blank"
            rel="noreferrer"
          >
            deployed app
          </a>
          <a
            href="https://github.com/mmarsden89/national-park"
            target="_blank"
            rel="noreferrer"
          >
            front-end repo
          </a>

          <a
            href="https://github.com/mmarsden89/national-parks-backend"
            target="_blank"
            rel="noreferrer"
          >
            back-end repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default NationalParks;
