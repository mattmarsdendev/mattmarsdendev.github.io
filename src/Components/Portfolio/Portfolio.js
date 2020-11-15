import "./Portfolio.scss";
import trividuhimg from "../../trividuh.png";
import nationalimg from "../../nationalparks.png";
import React, { useState } from "react";

const Portfolio = (props) => {
  const [trividuh, setTrividuh] = useState(false);
  const [nationalPark, setNationalPark] = useState(false);

  const handleTrividuh = () => {
    setTrividuh(true);
    setNationalPark(false);
  };

  const handleNational = () => {
    setTrividuh(false);
    setNationalPark(true);
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

  const nationalHTML = (
    <div className="portfolio-item">
      <img src={nationalimg} className="portfolio-image" />
      <div>
        <p className="portfolio-desc">
          A project originally started as a tech challenge, I decided to revamp
          the idea by building out a more robust backend and adding more
          functionality while also adding to the front-end experience. National
          Parks is a database to keep track of the 61 parks that you've already
          visited. Built with MongoDb, Express, React and Node with
          authorization handled by Auth0.
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
        <div className="project-nav" onClick={handleNational}>
          National Parks
        </div>
      </div>
      {trividuh && trividuhHTML}
      {nationalPark && nationalHTML}
    </div>
  );
};

export default Portfolio;
