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
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Navbar />
      <Footer />
      <Loading sizeX={100} sizeY={100} />
    </div>
  );
}

export default App;
