import "./Welcome.scss";
import Tools from "./Tools";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="introduction">
        <h1 className="hello">Hi, I'm Matt! I build things for the web</h1>
        <h3 className="specialize">
          I specialize in the front end but have professional full stack
          experience
        </h3>
      </div>
      <Tools />
    </div>
  );
};

export default Welcome;
