import "./PortfolioItem.scss";
import portfolioDictionary from "./portfolioDictionary.js";

const PortfolioItem = (props) => {
  const { name } = props;

  return (
    <div className="portfolio-item-container" key={name}>
      <div className="portfolio-image-container">
        <img
          src={portfolioDictionary[name].image2}
          className="portfolio-image"
          alt={name}
        />
        <img
          src={portfolioDictionary[name].image}
          className="portfolio-image-main"
          alt={name}
        />
      </div>
      <div className="portfolio-info">
        <p className="portfolio-desc">{portfolioDictionary[name].text}</p>
        <div className="portfolio-links">
          {portfolioDictionary[name].links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
