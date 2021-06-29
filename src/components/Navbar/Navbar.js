import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink
        exact
        to="/portfolio"
        className="nav-links"
        activeClassName="current"
      >
        Portfolio
      </NavLink>
      <p>Contact</p>
      <p>Resume</p>
    </div>
  );
};

export default Navbar;
