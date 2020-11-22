import "./Welcome.scss";
import Tools from "./Tools";
import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [inputText, setInputText] = useState("");
  const [workingDirectory, setWorkingDirectory] = useState(
    "/users/MattMarsden"
  );
  const [terminalReturn, setTerminalReturn] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "pwd") {
      setTerminalReturn([...terminalReturn, inputText]);
      setTerminalReturn([...terminalReturn, workingDirectory]);
      setInputText("");
    } else if (inputText === "clear") {
      const blankArr = [];
      setTerminalReturn(blankArr);
      setInputText("");
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  useEffect(() => {}, [terminalReturn]);

  const terminalReturnHTML = terminalReturn.map((item) => (
    <div className="termain-return">{item}</div>
  ));
  return (
    <div className="welcome-container">
      <div className="terminal-container">
        <div className="hello-text">
          Hi! I'm Matt. I build things for the web
        </div>
        <div className="specialize-text">
          I specialize in front end development but have experience as a full
          stack developer working on enterprise software. I love to build clean
          UI and have a passion for improving user experiences.
        </div>
        <div className="click-instructions">
          Feel free to click a link below
        </div>
        <div className="tool-text-container">
          <div className="tools-link">About Me</div>
          <div className="tools-link">Contact</div>
          <div className="tools-link">Portfolio</div>
          <div className="tools-link">Tools</div>
        </div>
        <div className="termain-return-container">{terminalReturnHTML}</div>
        <form onSubmit={handleSubmit}>
          <label>
            $
            <input
              autoFocus
              type="text"
              name="command"
              className="terminal-input"
              onChange={handleChange}
              value={inputText || ""}
            />
          </label>
        </form>
      </div>
      {/* <div className="introduction">
        <h1 className="hello">Hi, I'm Matt! I build things for the web</h1>
        <h3 className="specialize">
          I specialize in the front end but have professional full stack
          experience
        </h3>
      </div>
      <Tools /> */}
    </div>
  );
};

export default Welcome;
