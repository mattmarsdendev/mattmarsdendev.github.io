import "./Navbar.scss";
import { NavLink } from "react-router-dom";

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
      <p>resume</p>
    </div>
  );
};

export default Navbar;
