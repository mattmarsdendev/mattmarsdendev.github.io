import "./PortfolioItem.scss";
import portfolioDictionary from "./portfolioDictionary.js";

const PortfolioItem = (props) => {
  const { name } = props;
  return (
    <div className="portfolio-item-container">
      <div className="portfolio-image-container">
        <img
          src={portfolioDictionary[name].image2}
          className="portfolio-image"
        />
        <img
          src={portfolioDictionary[name].image}
          className="portfolio-image-main"
        />
      </div>
      <p className="portfolio-desc">{portfolioDictionary[name].text}</p>
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
  );
};

export default PortfolioItem;
