import "./Navbar.scss";
import React, { useEffect } from "react";

const Navbar = (props) => {
  const {
    handleWelcome,
    handlePortfolio,
    handleContact,
    handleSelection,
    welcome,
    portfolio,
    contact,
  } = props;

  useEffect(() => {}, [welcome, portfolio, contact]);
  return (
    <div className="navbar-container">
      <div onClick={handleSelection} className="link" id="Welcome">
        <div className={welcome ? "link-text current" : "link-text"}>
          Welcome
        </div>
      </div>
      <div onClick={handleSelection} className="link" id="Portfolio">
        <div className={portfolio ? "link-text current" : "link-text"}>
          Portfolio
        </div>
      </div>
      <div onClick={handleSelection} className="link" id="Contact">
        <div className={contact ? "link-text current" : "link-text"}>
          Contact
        </div>
      </div>
      <div className="link">
        <div className="link-text">Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
