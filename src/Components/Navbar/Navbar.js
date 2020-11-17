import "./Navbar.scss";
import React, { useEffect } from "react";

const Navbar = (props) => {
  const {
    handleWelcome,
    handlePortfolio,
    handleContact,
    welcome,
    portfolio,
    contact,
  } = props;

  useEffect(() => {}, [welcome, portfolio, contact]);
  return (
    <div className="navbar-container">
      <div
        onClick={handleWelcome}
        className={welcome ? "link current " : "link"}
      >
        <div className="link-text">Welcome</div>
      </div>
      <div onClick={handlePortfolio} className="link">
        <div className={portfolio ? "link-text current" : "link-text"}>
          Portfolio
        </div>
      </div>
      <div onClick={handleContact} className="link">
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
