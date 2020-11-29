import "./Welcome.scss";
import Tools from "./Tools";
import React, { useState, useEffect } from "react";
import DirectoryItems from "./DirectoryItems";
import DirectoryPaths from "./DirectoryPaths";
import SnapHelp from "./SnapHelp";
import TextFiles from "./TextFiles";

const Terminal = () => {
  const [inputText, setInputText] = useState("");
  const [workingDirectory, setWorkingDirectory] = useState(
    "/users/MattMarsden/Home/"
  );
  const [terminalReturn, setTerminalReturn] = useState([]);
  const [clear, setClear] = useState(false);
  const [previousCommands, setPreviousCommands] = useState([]);
  const [commandIndex, setCommandIndex] = useState(0);

  const defaultDirectory = "/users/MattMarsden/Home/";

  const handleSubmit = (e) => {
    e.preventDefault();
    let updated = [...terminalReturn, `$ ${inputText}`];
    let updatedDir = workingDirectory;
    setCommandIndex(previousCommands.length);
    setPreviousCommands([...previousCommands, inputText, ""]);
    if (inputText === "pwd") {
      updated.push(updatedDir);
      setInputText("");
    } else if (inputText === "clear") {
      setClear(true);
      updated = [];
      setInputText("");
    } else if (inputText.includes("cd")) {
      const directPath =
        DirectoryPaths[updatedDir][inputText.split(" ")[1]] ||
        DirectoryPaths[
          DirectoryPaths["aliases"][`${updatedDir}/${inputText.split(" ")[1]}`]
        ];
      if (directPath) {
        updatedDir = directPath.directory;
        setWorkingDirectory(directPath.directory);
        setInputText("");
      } else {
        updated.push(`-snap ${inputText}: No such file or directory`);
        setInputText("");
      }
    } else if (inputText === "ls") {
      updated = listFilesCommand(workingDirectory, updated);
      setInputText("");
    } else if (inputText.includes("snap")) {
      if (inputText.includes("--help")) {
        for (const [key, value] of Object.entries(SnapHelp)) {
          updated.push(`${key}: ${value}`);
        }
        setInputText("");
      } else {
        updated.push(
          "Currently only the --help flag is supported but there are more features planned! Stay tuned!"
        );
        setInputText("");
      }
    } else if (inputText === "home") {
      updated = [];
      setClear(false);
      setWorkingDirectory("/users/MattMarsden/Home/");
      setInputText("");
    } else if (inputText.includes("whim")) {
      if (inputText.includes("txt")) {
        handleTerminalClick(inputText.split(" ")[1], updated);
        setInputText("");
      } else {
        updated.push(
          `whim does not recognize ${inputText.split(" ")[1]} as a txt file`
        );
        setInputText("");
      }
    } else {
      updated.push(`-snap: ${inputText}: command not found`);
      setInputText("");
    }
    if (updatedDir !== workingDirectory) {
      updated.push(updatedDir);
    }
    setTerminalReturn(updated);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && commandIndex > 0) {
      setCommandIndex(commandIndex - 1);
      setInputText(previousCommands[commandIndex]);
    } else if (e.keyCode === 40 && commandIndex < previousCommands.length) {
      setCommandIndex(commandIndex + 1);
      setInputText(previousCommands[commandIndex]);
    } else if (e.keyCode === 39) {
      const directoryItemsKey =
        DirectoryItems[workingDirectory] ||
        DirectoryItems[DirectoryItems["aliases"][workingDirectory]];

      const textToSearch = inputText.includes(" ")
        ? inputText.split(" ")[1]
        : inputText;

      const updatedText = inputText.includes(" ")
        ? inputText.split(" ")[0]
        : "";

      const possibilities = directoryItemsKey.filter((item) => {
        return item.includes(textToSearch);
      });
      if (possibilities.length < 2 && possibilities.length > 0) {
        setInputText(`${updatedText} ${possibilities[0]}`);
      }
    }
  };

  const listFilesCommand = (directory, updatedTerminalReturn) => {
    const directoryItemsMap =
      DirectoryItems[directory] ||
      DirectoryItems[DirectoryItems["aliases"][directory]];

    directoryItemsMap.map((item) => {
      updatedTerminalReturn.push(item);
    });
    return updatedTerminalReturn;
  };

  const handleAboutLink = (e) => {
    const updatedDirectory = "/users/MattMarsden/Home/AboutMe/";
    setWorkingDirectory(updatedDirectory);
    let updatedTerminal = [...terminalReturn];
    updatedTerminal.push(`$ cd ${workingDirectory}`);
    updatedTerminal.push("$ ls");
    const updated = listFilesCommand(updatedDirectory, updatedTerminal);
    setTerminalReturn(updated);
  };

  const handleContactLink = () => {
    const updatedDirectory = "/users/MattMarsden/Home/Contact/";
    setWorkingDirectory(updatedDirectory);
    let updatedTerminal = [...terminalReturn];
    updatedTerminal.push(`$ cd ${workingDirectory}`);
    updatedTerminal.push("$ ls");
    const updated = listFilesCommand(updatedDirectory, updatedTerminal);
    setTerminalReturn(updated);
  };

  const handlePortfolioLink = () => {
    const updatedDirectory = "/users/MattMarsden/Home/Portfolio/";
    setWorkingDirectory(updatedDirectory);
    let updatedTerminal = [...terminalReturn];
    updatedTerminal.push(`$ cd ${workingDirectory}`);
    updatedTerminal.push("$ ls");
    const updated = listFilesCommand(updatedDirectory, updatedTerminal);
    setTerminalReturn(updated);
  };

  const handleToolsLink = () => {
    const updatedDirectory = "/users/MattMarsden/Home/Languages&Tools/";
    setWorkingDirectory(updatedDirectory);
    let updatedTerminal = [...terminalReturn];
    updatedTerminal.push(`$ cd ${workingDirectory}`);
    updatedTerminal.push("$ ls");
    const updated = listFilesCommand(updatedDirectory, updatedTerminal);
    setTerminalReturn(updated);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleTerminalClick = (file, updated) => {
    if (file.includes("txt")) {
      updated.push(TextFiles[file]);
      setTerminalReturn(updated);
    } else if (file.includes(".com")) {
      window.open(
        "mailto:mattmarsdendev@gmail.com?subject=Wow, this terminal is really neat!"
      );
    } else if (file.includes(".io")) {
      window.open("/#/portfolio");
    } else if (file.includes("$")) {
      const newDirectory = file.includes("home" || "Home")
        ? defaultDirectory
        : `${defaultDirectory}${file.split("$")[1]}`;
      setWorkingDirectory(newDirectory);
      updated.push(`$ cd ${newDirectory}`);
      updated.push(`$ ls`);

      const listed = listFilesCommand(newDirectory, updated);
      updated.push(listed);
    }
    setTerminalReturn(updated);
  };

  useEffect(() => {}, [terminalReturn, clear]);

  const handleFileLink = (item) => {
    const file = item.target.id;
    if (file.includes("#") && !file.includes("whim")) {
      const updated = [...terminalReturn, `$ whim ${file}`];
      setTerminalReturn(updated);
      handleTerminalClick(file, updated);
    } else if (file.includes("$") && !file.includes(" ")) {
      const newDirectory = file.includes("Home")
        ? defaultDirectory
        : `/users/MattMarsden/Home/${file.split("$")[1]}/`;
      setWorkingDirectory(newDirectory);
      let updated = [...terminalReturn];
      updated.push(`$ cd ${newDirectory}`);
      if (file.includes("home") || file.includes("Home")) {
        updated = [];
      } else {
        updated = listFilesCommand(newDirectory, updated);
      }
      setTerminalReturn(updated);
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

  return (
    <div className="terminal-container">
      <div className="loading-snap-container">
        <div className="loading-snap">Loading...</div>
        <div className="loaded-snap">Loaded</div>
      </div>
      {!clear && (
        <div
          className={
            previousCommands.length > 1
              ? "terminal-hello-container"
              : "terminal-hello-container-animated"
          }
        >
          <div className="hello-text">
            Hi! I'm Matt. I build things for the web!
          </div>
          <div className="specialize-text">
            I specialize in front end development but have experience as a full
            stack developer working on enterprise software. I love to build
            clean UI and have a passion for improving user experiences.
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
            onKeyDown={handleKeyDown}
          />
        </label>
      </form>
    </div>
  );
};

export default Terminal;
