import "./App.scss";
import {
  Welcome,
  Contact,
  Navbar,
  Portfolio,
  Footer,
  Header,
  Loading,
  FourOhFour,
} from "./Components/index";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const pathArr = ["portfolio", "contact"];
  const [pathName, setPathName] = useState("/");
  useEffect(() => {
    setPathName(window.location.pathname);
    console.log(window.location.pathname);
  }, [pathName]);
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
      <Navbar />
      <Footer />
      <Loading sizeX={100} sizeY={100} />
    </div>
  );
}

export default App;
