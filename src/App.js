import "./App.css";
import { Header, Navbar, Welcome, Portfolio } from "./components/index.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
