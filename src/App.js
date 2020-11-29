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
import { Route, Switch } from "react-router-dom";

function App() {
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
