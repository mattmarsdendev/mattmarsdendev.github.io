import "./Navbar.scss";

const Navbar = (props) => {
  const { handleExperience, handlePortfolio, handleContact } = props;
  return (
    <div className="navbar-container">
      <div onClick={handleExperience}>Experience</div>
      <div onClick={handlePortfolio}>Portfolio</div>
      <div onClick={handleContact}>Contact</div>
    </div>
  );
};

export default Navbar;
