import "./App.scss";
import {
  Welcome,
  Contact,
  Navbar,
  Portfolio,
  Footer,
  Header,
  Loading,
} from "./Components/index";
import { useState } from "react";

function App() {
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [selected, setSelected] = useState(<Welcome />);

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

  const handleSelection = (e) => {
    setSelected();
  };

  return (
    <div className="app">
      <Header />
      <div className="app-container">{selected}</div>
      <Navbar
        handlePortfolio={handlePortfolio}
        handleContact={handleContact}
        handleWelcome={handleWelcome}
        handleSelection={handleSelection}
        portfolio={portfolio}
        contact={contact}
        welcome={welcome}
      />
      <Footer />
      <Loading sizeX={100} sizeY={100} />
    </div>
  );
}

export default App;
