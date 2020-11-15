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
        <div className="link-text">Welcome</div>
      </div>
      <div onClick={handlePortfolio} className="link">
        <div>Portfolio</div>
      </div>
      <div onClick={handleContact} className="link">
        <div>Contact</div>
      </div>
      <div className="link">Resume</div>
    </div>
  );
};

export default Navbar;
