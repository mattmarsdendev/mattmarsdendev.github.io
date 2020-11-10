import logo from "./logo.svg";
import "./App.scss";
import Welcome from "./Components/Welcome/Welcome";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import { useState } from "react";

function App() {
  const [experience, setExperience] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const handleExperience = () => {
    setExperience(true);
    setPortfolio(false);
    setContact(false);
    setWelcome(false);
  };

  const handlePortfolio = () => {
    setPortfolio(true);
    setExperience(false);
    setContact(false);
    setWelcome(false);
  };

  const handleContact = () => {
    setContact(true);
    setPortfolio(false);
    setExperience(false);
    setWelcome(false);
  };

  const handleWelcome = () => {
    setContact(false);
    setPortfolio(false);
    setExperience(false);
    setWelcome(true);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="card-container">
          {welcome && <Welcome />}
          {contact && <Contact />}
          {experience && <Experience />}
          {portfolio && <Portfolio />}
          <Navbar
            handleExperience={handleExperience}
            handlePortfolio={handlePortfolio}
            handleContact={handleContact}
            handleWelcome={handleWelcome}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
