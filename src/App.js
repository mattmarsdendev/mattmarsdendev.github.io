import logo from "./logo.svg";
import "./App.scss";
import {
  Welcome,
  Contact,
  Navbar,
  Portfolio,
  Footer,
} from "./Components/index";
import { useState } from "react";

function App() {
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const handlePortfolio = () => {
    setPortfolio(true);
    setContact(false);
    setWelcome(false);
  };

  const handleContact = () => {
    setContact(true);
    setPortfolio(false);
    setWelcome(false);
  };

  const handleWelcome = () => {
    setContact(false);
    setPortfolio(false);
    setWelcome(true);
  };

  const rainArr = [
    [5, 1.2, Math.random() * (0.8 - 0.3) + 0.3],
    [10, 0.6, Math.random() * (0.8 - 0.3) + 0.3],
    [15, 1, Math.random() * (0.87 - 0.3) + 0.3],
    [20, 0.3, Math.random() * (0.8 - 0.3) + 0.3],
    [25, 2.3, Math.random() * (0.8 - 0.3) + 0.3],
    [30, 3.8, Math.random() * (0.8 - 0.3) + 0.3],
    [35, 1, Math.random() * (0.8 - 0.3) + 0.3],
    [40, 0.2, Math.random() * (0.8 - 0.3) + 0.3],
    [45, 19, Math.random() * (0.8 - 0.3) + 0.3],
    [50, 0.4, Math.random() * (0.8 - 0.3) + 0.3],
    [55, 0.8, Math.random() * (0.8 - 0.3) + 0.3],
    [60, 0, Math.random() * (0.8 - 0.3) + 0.3],
    [65, 1.3, Math.random() * (0.8 - 0.3) + 0.3],
    [70, 0.3, Math.random() * (0.8 - 0.3) + 0.3],
    [75, 1.8, Math.random() * (0.8 - 0.3) + 0.3],
    [80, 0.3, Math.random() * (0.8 - 0.3) + 0.3],
    [85, 0.9, Math.random() * (0.8 - 0.3) + 0.3],
    [90, 1.4, Math.random() * (0.8 - 0.3) + 0.3],
    [95, 0.3, Math.random() * (0.8 - 0.3) + 0.3],
    [99, 1.6, Math.random() * (0.8 - 0.3) + 0.3],
  ];

  const handlehiddenrain = () => {
    const nothidden = [...rainArr];
    if (welcome) {
      nothidden.splice(0, 5);
    } else if (portfolio) {
      nothidden.splice(5, 5);
    } else {
      nothidden.splice(10, 5);
    }
    return nothidden;
  };

  const handleRain = handlehiddenrain().map((rain, idx) => (
    <div>
      <div
        className="drop"
        style={{
          left: `calc(${rain[0]}vw + 2px)`,
          animationDelay: `${rain[1]}s`,
          animation: `drop ${rain[2]}s linear infinite`,
        }}
      ></div>
      <div
        className="splash"
        style={{
          left: `${rain[0]}vw`,
          animationDelay: `${rain[1]}s`,
          animation: `splat ${rain[2]}s linear infinite`,
        }}
      ></div>
    </div>
  ));

  return (
    <div className="app">
      <div className="top-container">
        <div className="seattle">SEATTLE</div>
        <div className="based">based software engineer</div>
      </div>
      <div className="app-container">
        {welcome && <Welcome />}
        {contact && <Contact />}
        {portfolio && <Portfolio />}
      </div>
      <Navbar
        handlePortfolio={handlePortfolio}
        handleContact={handleContact}
        handleWelcome={handleWelcome}
        portfolio={portfolio}
        contact={contact}
        welcome={welcome}
      />
      <div className="rain front-row">{handleRain}</div>
      <Footer />
    </div>
  );
}

export default App;
