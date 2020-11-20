import "./Portfolio.scss";
import trividuhimg from "../../trividuh.png";
import nationalimg from "../../nationalparks.png";
import nationalphone from "../../nationalparkphone.png";
import trividuhphone from "../../trividuhphone.png";
import React, { useState } from "react";
import Loading from "../Loading/Loading";

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
      <div className="color-block">
        <img src={trividuhphone} className="phone-image" />
      </div>
      <img src={trividuhimg} className="portfolio-image" />
      <div className="desc-cont">
        <p className="portfolio-desc">
          A trivia application (and great timekiller) built with JavaScript and
          React. Answer questions, earn points and unlock new question sets!
        </p>
        <div className="portfolio-links">
          <a href="https://mmarsden89.github.io/trividuh/" target="_blank">
            deployed app
          </a>
          <a href="https://github.com/mmarsden89/trividuh" target="_blank">
            front-end repo
          </a>
        </div>
      </div>
    </div>
  );

  const nationalHTML = (
    <div className="portfolio-item">
      <div className="color-block">
        <img src={nationalphone} className="phone-image" />
      </div>
      <img src={nationalimg} className="portfolio-image" />
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

  return (
    <div className="portfolio-container">
      <div className="recent-projects">
        <div className="project-nav-title">Recent Projects</div>
        <div
          className={trividuh ? "active" : "project-nav"}
          onClick={handleTrividuh}
        >
          Trividuh
        </div>
        <div
          className={nationalPark ? "active" : "project-nav"}
          onClick={handleNational}
        >
          National Parks
        </div>
      </div>
      {trividuh && trividuhHTML}
      {nationalPark && nationalHTML}
    </div>
  );
};

export default Portfolio;
