import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const currentPath = window.location.pathname;

  const [current, setCurrent] = useState("/");

  const checkActive = (nav) => {
    return current === nav;
  };

  console.log(currentPath);
  return (
    <div className="navbar-container">
      <NavLink exact to="/" className="link-text" activeClassName="current">
        Welcome
      </NavLink>
      <NavLink
        exact
        to="/portfolio"
        className="link-text"
        activeClassName="current"
      >
        Portfolio
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className="link-text"
        activeClassName="current"
      >
        Contact
      </NavLink>
      <div className="link">
        <div className="link-text">Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
