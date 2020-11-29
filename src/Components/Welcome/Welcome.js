import "./Welcome.scss";
import Terminal from "./Terminal";

const Welcome = (props) => {
  const helpHtml = <div className="help-window"></div>;
  console.log(props);

  return (
    <div className="welcome-container">
      <Terminal />
      {helpHtml}
    </div>
  );
};

export default Welcome;
