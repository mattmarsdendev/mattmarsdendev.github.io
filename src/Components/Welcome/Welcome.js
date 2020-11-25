import "./Welcome.scss";
import Terminal from "./Terminal";

const Welcome = () => {
  const helpHtml = <div className="help-window"></div>;

  return (
    <div className="welcome-container">
      <Terminal />
      {helpHtml}
    </div>
  );
};

export default Welcome;
