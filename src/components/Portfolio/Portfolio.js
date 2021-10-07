import "./Portfolio.scss";
import { Route, Switch } from "./node_modules/react-router-dom";
import { FourOhFour } from "../index.js";
import Terminal from "./Terminal/Terminal.js";
import NationalParks from "./NationalParks/NationalParks.js";
import Trividuh from "./Trividuh/Trividuh.js";
import { NavLink, Link } from "./node_modules/react-router-dom";
import PortfolioItem from "./PortfolioItem/PortfolioItem.js";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-navbar">
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
              to="/portfolio/cryptochart"
              className="nav-links"
              activeClassName="current"
            >
              cryptochart
            </NavLink>
            <NavLink
              exact
              to="/portfolio/trividuh"
              className="nav-links"
              activeClassName="current"
            >
              triviuh
            </NavLink>
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
          </div>
        </div>
      </div>
      <div className="portfolio-piece">
        <Switch>
          <Route exact path="/portfolio">
            <div className="portfolio-header">PORTFOLIO</div>
            <div className="portfolio-new">
              <Link to="/portfolio/cryptochart">
                <div className="clipped-element"></div>
                <div className="new-project">new project!</div>
              </Link>
            </div>
          </Route>
          <Route exact path="/portfolio/404" component={FourOhFour} />
          <Route exact path="/portfolio/snap">
            <iframe
              src="https://mmarsden89.github.io/snap/"
              title="snap"
              style={{
                height: "100%",
                width: "100%",
                border: "none",
              }}
            />
          </Route>
          <Route exact path="/portfolio/mountainview">
            <iframe
              src="https://mmarsden89.github.io/mountain-view/"
              title="mountain-view"
              style={{
                width: "100%",
                height: "100%",
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
          <Route exact path="/portfolio/cryptochart">
            <PortfolioItem name={"cryptochart"} />
          </Route>
          {/* <Route exact path="/portfolio/community" component={Community} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
