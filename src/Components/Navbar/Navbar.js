import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import Resume from "../../Styles/images/Matt_Marsden_Resume.pdf";

const Navbar = (props) => {
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
        <a href={Resume} target="_blank" className="link-text" rel="noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
