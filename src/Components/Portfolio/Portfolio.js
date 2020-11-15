import "./Portfolio.scss";
import trividuhimg from "../../trividuh.png";
import React, { useState } from "react";

const Portfolio = (props) => {
  const [trividuh, setTrividuh] = useState(false);
  const [nationalPark, setNationalPark] = useState(false);

  const handleTrividuh = () => {
    setTrividuh(true);
    setNationalPark(false);
  };

  const trividuhHTML = (
    <div className="portfolio-item">
      <img src={trividuhimg} className="portfolio-image" />
      <div>
        <p className="portfolio-desc">
          Trividuh, the trivia app you've always wanted. Answer questions, earn
          points and unlock more quetion sets! Built with React
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
  );

  return (
    <div className="portfolio-container">
      <div className="recent-projects">
        <div className="project-nav">Recent Projects</div>
        <div className="project-nav" onClick={handleTrividuh}>
          Trividuh
        </div>
        <div className="project-nav">National Parks</div>
      </div>
      {trividuh && trividuhHTML}
    </div>
  );
};

export default Portfolio;
