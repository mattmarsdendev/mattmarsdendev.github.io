import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import resume from "../../Styles/Assets/Matt Marsden Resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink exact to="/" className="nav-links" activeClassName="nav-current">
        home
      </NavLink>
      <NavLink
        to="/portfolio"
        className="nav-links"
        activeClassName="nav-current"
      >
        portfolio
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className="nav-links"
        activeClassName="nav-current"
      >
        contact
      </NavLink>
      <a href={resume} target="_blank" className="nav-links">
        resume
      </a>
    </div>
  );
};

export default Navbar;
