import "./Portfolio.scss";
import { Route, Switch } from "react-router-dom";
import { FourOhFour } from "../index.js";
import Terminal from "./Terminal/Terminal.js";
import NationalParks from "./NationalParks/NationalParks.js";
import Trividuh from "./Trividuh/Trividuh.js";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="navbar">
        <NavLink
          exact
          to="/portfolio"
          className="nav-links"
          activeClassName="current-gray"
        >
          portfolio
        </NavLink>
        <div className="subnav">
          <button className="subnavbtn">
            full-stack <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <NavLink
              exact
              to="/portfolio/nationalparks"
              className="nav-links"
              activeClassName="current"
            >
              national parks
            </NavLink>
            <a href="#team">team</a>
            <NavLink
              exact
              to="/portfolio/community"
              className="nav-links"
              activeClassName="current"
            >
              community
            </NavLink>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">
            front-end <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <NavLink
              exact
              to="/portfolio/trividuh"
              className="nav-links"
              activeClassName="current"
            >
              triviuh
            </NavLink>
            <a href="#deliver">deliver</a>
            <a href="#package">package</a>
            <NavLink
              exact
              to="/portfolio/snap"
              className="nav-links"
              activeClassName="current"
            >
              snap
            </NavLink>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">
            css animations <i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <NavLink
              exact
              to="/portfolio/404"
              className="nav-links"
              activeClassName="current"
            >
              404
            </NavLink>
            <NavLink
              exact
              to="/portfolio/mountainview"
              className="nav-links"
              activeClassName="current"
            >
              mountain view
            </NavLink>
            <a href="#link3">link 3</a>
            <a href="#link4">link 4</a>
          </div>
        </div>
        <a href="#contact">misc</a>
      </div>
      <div className="portfolio-piece">
        <div className="portfolio-header">PORTFOLIO</div>
        <Switch>
          <Route exact path="/portfolio/404" component={FourOhFour} />
          <Route exact path="/portfolio/snap" component={Terminal} />
          <Route exact path="/portfolio/mountainview">
            <iframe
              src="https://mmarsden89.github.io/mountain-view/"
              title="mountain-view"
              style={{
                width: "100%",
                height: "100%",
                // height: "calc(100% - 50px)",
                paddingTop: "20px",
              }}
              frameborder="0"
            ></iframe>
          </Route>
          <Route
            exact
            path="/portfolio/nationalparks"
            component={NationalParks}
          />
          <Route exact path="/portfolio/trividuh" component={Trividuh} />
          {/* <Route exact path="/portfolio/community" component={Community} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
