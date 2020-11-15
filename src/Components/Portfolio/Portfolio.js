import "./Portfolio.scss";
import trividuh from "../../trividuh.png";

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <div className="recent-projects">
        <h4>Recent Projects</h4>
        <h4>Trividuh</h4>
        <h4>National Parks</h4>
      </div>
      <div className="portfolio-item">
        <img src={trividuh} className="portfolio-image" />
        <div>
          <p className="portfolio-desc">
            Trividuh, the trivia app you've always wanted. Answer questions,
            earn points and unlock more quetion sets! Built with React
          </p>
          <div className="portfolio-links">
            <a href="" target="_blank">
              deployed app
            </a>
            <a href="" target="_blank">
              front-end repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
