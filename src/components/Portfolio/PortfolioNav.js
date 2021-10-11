import { NavLink } from "react-router-dom";

const PortfolioNav = () => {
  return (
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
            trividuh
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
  );
};

export default PortfolioNav;
