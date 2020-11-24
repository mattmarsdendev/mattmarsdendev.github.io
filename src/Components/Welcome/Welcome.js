import "./Welcome.scss";
import Tools from "./Tools";
import React, { useState, useEffect } from "react";
import DirectoryItems from "./DirectoryItems";
import DirectoryPaths from "./DirectoryPaths";

const Welcome = () => {
  const [inputText, setInputText] = useState("");
  const [workingDirectory, setWorkingDirectory] = useState(
    "/users/MattMarsden/"
  );
  const [terminalReturn, setTerminalReturn] = useState([]);
  const [help, setHelp] = useState(false);
  const [clear, setClear] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "pwd") {
      const updated = [...terminalReturn, `$ ${inputText}`];
      setTerminalReturn([...updated, workingDirectory]);
      setInputText("");
    } else if (inputText === "clear") {
      setClear(true);
      const blankArr = [];
      setTerminalReturn(blankArr);
      setInputText("");
    } else if (inputText.includes("cd")) {
      const directPath =
        DirectoryPaths[workingDirectory][inputText.split(" ")[1]];
      setTerminalReturn([...terminalReturn, `$ ${inputText}`]);
      if (directPath) {
        setWorkingDirectory(directPath.directory);
        setTerminalReturn([...terminalReturn, directPath.message]);
        setInputText("");
      } else {
        setTerminalReturn([
          ...terminalReturn,
          `-snap ${inputText}: No such file or directory`,
        ]);
        setInputText("");
      }
    } else if (inputText === "ls") {
      const updated = [...terminalReturn, `$ ${inputText}`];
      DirectoryItems[workingDirectory].map((item) => {
        updated.push(item);
        setTerminalReturn(updated);
      });
      setInputText("");
    } else if (inputText.includes("snap")) {
      if (inputText.includes("--help")) {
        const updated = [...terminalReturn, `$ ${inputText}`];
        setHelp(true);
        const help =
          "Hey, thanks for trying out the terminal! Current working commands: cd, pwd, ls, clear are all functioning. Type 'home' to return to home directory";
        setTerminalReturn([...updated, help]);
        setInputText("");
      } else {
        const updated = [...terminalReturn, `$ ${inputText}`];
        const snap =
          "Currently only the --help flag is supported but there are more features planned! Stay tuned!";
        setTerminalReturn([...updated, snap]);
        setInputText("");
      }
    } else if (inputText === "home") {
      setClear(false);
      setWorkingDirectory("/users/MattMarsden/");
      setInputText("");
    } else {
      setTerminalReturn([
        ...terminalReturn,
        `-snap: ${inputText}: command not found`,
      ]);
      setInputText("");
    }
  };

  const handleAboutLink = () => {
    const updatedDirectory = "/users/MattMarsden/AboutMe/";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    setTerminalReturn([...ls, `${DirectoryItems[updatedDirectory]}`]);
  };

  const handleContactLink = () => {
    const updatedDirectory = "/users/MattMarsden/Contact/";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    setTerminalReturn([...ls, `${DirectoryItems[updatedDirectory]}`]);
  };

  const handlePortfolioLink = () => {
    const updatedDirectory = "/users/MattMarsden/Portfolio/";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    const updated = [...ls];
    DirectoryItems[updatedDirectory].map((item) => {
      updated.push(item);
      setTerminalReturn(updated);
    });
  };

  const handleToolsLink = () => {
    const updatedDirectory = "/users/MattMarsden/Languages&Tools/";
    setWorkingDirectory(updatedDirectory);
    const cd = [...terminalReturn, `$ cd ${workingDirectory}`];
    const ls = [...cd, "$ ls"];
    setTerminalReturn([...ls, `${DirectoryItems[updatedDirectory]}`]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleTerminalClick = (file, updated) => {
    if (file === "AboutMe.txt") {
      const aboutMe =
        "Hey! Thanks for stopping by in the terminal and checking out the about me. Obviously, I love to be creative in my development work. In my free time, I love to cook and bake and am a hobby musician. I love to meet new people so feel free to drop me a line whenever!";
      setTerminalReturn([...updated, aboutMe]);
    } else if (file.includes(".com")) {
      window.open(
        "mailto:mattmarsdendev@gmail.com?subject=Wow, this terminal is really neat!"
      );
    } else if (file.includes(".io")) {
      window.open("/#/portfolio");
    } else if (file === "portfolioWebsite.txt") {
      const portfolio =
        "This portfolio has turned into a bit of a passion project for me and I think it's a great showcase for my front-end skills. This terminal was created from scratch and presented a lot of interesting challenges to overcome. ";
      setTerminalReturn([...updated, portfolio]);
    } else if (file === "trividuh.txt") {
      const trividuh =
        "Trividuh was a fun trivia front end project that I put together to help me kill time when I'm on the go";
      setTerminalReturn([...updated, trividuh]);
    } else if (file === "nationalParks.txt") {
      const nationalparks =
        "I built this project to help me keep track of the national parks I've already visited. It helps me plan where to stop along roadtrips";
      setTerminalReturn([...updated, nationalparks]);
    }
  };

  useEffect(() => {}, [terminalReturn, clear]);

  const handleFileLink = (item) => {
    const file = item.target.id;
    if (
      (file.includes("txt") && !file.includes("whim")) ||
      (file.includes(".com") && !file.includes("whim")) ||
      (file.includes(".io") && !file.includes("whim"))
    ) {
      const updated = [...terminalReturn, `$ whim ${file}`];
      setTerminalReturn(updated);
      handleTerminalClick(file, updated);
    } else if (file.includes("$") && !file.includes(" ")) {
      setWorkingDirectory(`/users/MattMarsden/${file.split("$")[1]}/`);
    }
  };

  const terminalReturnHTML = terminalReturn.map((item) => (
    <div
      className={
        (item.includes("txt") ||
          item.includes(".com") ||
          item.includes(".io")) &&
        !item.includes("whim")
          ? "terminal-return txt-link"
          : item.includes("$") && !item.includes("$ ")
          ? "terminal-return tools-link"
          : "terminal-return"
      }
      onClick={(item) => handleFileLink(item)}
      id={item}
    >
      {item}
    </div>
  ));

  const helpHtml = (
    <div className="help-window">
      {help && (
        <>
          <div>cd</div>
          <div>ls</div>
          <div>pwd</div>
          <div>clear</div>
          <div>whim</div>
        </>
      )}
    </div>
  );

  return (
    <div className="welcome-container">
      <div className="terminal-container">
        <div className="loading-snap-container">
          <div className="loading-snap">Loading...</div>
          <div className="loaded-snap">Loaded</div>
        </div>
        {!clear && (
          <div className="terminal-hello-container">
            <div className="hello-text">
              Hi! I'm Matt. I build things for the web!
            </div>
            <div className="specialize-text">
              I specialize in front end development but have experience as a
              full stack developer working on enterprise software. I love to
              build clean UI and have a passion for improving user experiences.
            </div>
            <div className="click-instructions">
              <br />
              Feel free to click an <p className="orange">$orange&nbsp;</p>
              link below or try out the terminal! <br />
              Type snap --help for more info
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
              <div className="tools-link" onClick={handleToolsLink}>
                $Languages&Tools
              </div>
            </div>
          </div>
        )}
        <div className="terminal-return-container">{terminalReturnHTML}</div>
        <form onSubmit={handleSubmit} className="input-container">
          <label>
            $
            <input
              autoFocus
              type="text"
              name="command"
              className="terminal-input"
              onChange={handleChange}
              value={inputText || ""}
              tabindex="-1"
            />
          </label>
        </form>
      </div>
      {helpHtml}
    </div>
  );
};

export default Welcome;
