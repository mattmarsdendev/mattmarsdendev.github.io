import "./App.css";
import { Header, Navbar, Welcome } from "./components/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
