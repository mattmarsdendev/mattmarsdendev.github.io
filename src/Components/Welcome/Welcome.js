import "./Welcome.scss";
import Terminal from "./Components/Terminal";
import SmallScreen from "./Components/SmallScreen";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Terminal />
      <SmallScreen />
    </div>
  );
};

export default Welcome;
