import "./Welcome.scss";
import Tools from "./Tools";
import React, { useState, useEffect } from "react";
import DirectoryItems from "./DirectoryItems";

const Welcome = () => {
  const [inputText, setInputText] = useState("");
  const [workingDirectory, setWorkingDirectory] = useState(
    "/users/MattMarsden"
  );
  const [terminalReturn, setTerminalReturn] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "pwd") {
      const updated = [...terminalReturn, `$ ${inputText}`];
      setTerminalReturn([...updated, workingDirectory]);
      setInputText("");
    } else if (inputText === "clear") {
      const blankArr = [];
      setTerminalReturn(blankArr);
      setInputText("");
    } else if (inputText.includes("cd")) {
      setTerminalReturn([...terminalReturn, `$ ${inputText}`]);
      setInputText("");
    } else if (inputText === "ls") {
      const updated = [...terminalReturn, `$ ${inputText}`];
      setTerminalReturn([...updated, DirectoryItems[workingDirectory]]);
      setInputText("");
    } else if (inputText === "--help") {
      const help =
        "Hey, thanks for trying out the terminal! Current working commands: cd, pwd, ls, clear are all functioning. Type 'home' to return to home directory";
      setTerminalReturn([...terminalReturn, help]);
      setInputText("");
    } else if (inputText === "home") {
      setWorkingDirectory("/users/MattMarsden");
      setTerminalReturn([...terminalReturn, "$ cd /users/MattMarsden"]);
      setInputText("");
    } else {
      setTerminalReturn([
        ...terminalReturn,
        `-snap: ${inputText}: command not found`,
      ]);
      setInputText("");
    }
  };

  const aboutLsHTML = <div>{DirectoryItems[workingDirectory]}</div>;

  const handleAboutLink = () => {
    // const updated = [...terminalReturn, `$ ${inputText}`];
    const updatedDirectory = "/users/MattMarsden/AboutMe/";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    setTerminalReturn([...ls, `${DirectoryItems[updatedDirectory]}`]);
  };

  const handleContactLink = () => {
    const updatedDirectory = "/users/MattMarsden/Contact";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    setTerminalReturn([...ls, `${DirectoryItems[updatedDirectory]}`]);
  };

  const handlePortfolioLink = () => {
    const updatedDirectory = "/users/MattMarsden/Portfolio";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    const updated = [...terminalReturn];
    DirectoryItems[updatedDirectory].map((item) => {
      updated.push(item);
      setTerminalReturn(updated);
    });
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleTerminalClick = (file) => {
    if (file === "AboutMe.txt") {
      const aboutMe =
        "Hey! Thanks for stopping by in the terminal and checking out the about me. Obviously, I love to be creative in my development work. In my free time, I love to cook and bake and am a hobby musician. I love to meet new people so feel free to drop me a line whenever!";
      setTerminalReturn([...terminalReturn, aboutMe]);
    } else if (file.includes(".com")) {
      window.open(
        "mailto:mattmarsdendev@gmail.com?subject=Wow, this terminal is really neat!"
      );
    } else if (file.includes(".io")) {
      window.open("/#/portfolio");
    }
  };

  useEffect(() => {}, [terminalReturn]);

  const handleFileLink = (item) => {
    const file = item.target.id;
    console.log(file);
    if (file.includes("txt") || file.includes(".com") || file.includes(".io"))
      handleTerminalClick(file);
  };

  const terminalReturnHTML = terminalReturn.map((item) => (
    <div
      className={
        item.includes("txt") || item.includes(".com") || item.includes(".io")
          ? "terminal-return txt-link"
          : "terminal-return"
      }
      onClick={(item) => handleFileLink(item)}
      id={item}
    >
      {console.log(item)}
      {item}
    </div>
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
          <div className="tools-link" onClick={handleAboutLink}>
            $AboutMe
          </div>
          <div className="tools-link" onClick={handleContactLink}>
            $Contact
          </div>
          <div className="tools-link" onClick={handlePortfolioLink}>
            $Portfolio
          </div>
          <div className="tools-link">$Tools</div>
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
