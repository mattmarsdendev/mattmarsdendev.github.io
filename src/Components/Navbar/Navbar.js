import "./Navbar.scss";

const Navbar = (props) => {
  const {
    handleWelcome,
    handleExperience,
    handlePortfolio,
    handleContact,
  } = props;
  return (
    <div className="navbar-container">
      <div onClick={handleWelcome} className="link">
        Welcome
      </div>
      <div onClick={handlePortfolio} className="link">
        Portfolio
      </div>
      <div onClick={handleContact} className="link">
        Contact
      </div>
      <div className="link">Resume</div>
    </div>
  );
};

export default Navbar;
