import "./Welcome.scss";
import Terminal from "./Terminal";

const Welcome = () => {
  const helpHtml = (
    <div className="help-window">
      <div>cd</div>
      <div>ls</div>
      <div>pwd</div>
      <div>clear</div>
      <div>whim</div>
    </div>
  );

  return (
    <div className="welcome-container">
      <Terminal />
      {helpHtml}
    </div>
  );
};

export default Welcome;
