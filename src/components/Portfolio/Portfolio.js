import "./Portfolio.scss";
import { Route, Switch } from "react-router-dom";
import { FourOhFour } from "../index.js";
import Terminal from "./Terminal.js";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div class="navbar">
        <a href="#portfolio">Home</a>
        <div class="subnav">
          <button class="subnavbtn">
            Full-Stack <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#company">Company</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            Front-End <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#bring">Bring</a>
            <a href="#deliver">Deliver</a>
            <a href="#package">Package</a>
            <a href="/#/portfolio/terminal">Terminal</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            CSS Animations <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="/#/portfolio/404">404</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Misc</a>
      </div>
      <Switch>
        <Route exact path="/portfolio/404" component={FourOhFour} />
        <Route exact path="/portfolio/terminal" component={Terminal} />
      </Switch>
    </div>
  );
};

export default Portfolio;
