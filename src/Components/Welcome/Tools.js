const Tools = () => {
  const tools = [
    "JavaScript",
    "Python",
    "(Postgre)SQL",
    "React",
    "Node",
    "Express",
    "MongoDb",
    "AWS",
    "Git / Github",
    "HTML",
    "(S)CSS",
  ];

  const toolHTML = tools.map((tool, idx) => (
    <div className="single-tool" key={idx}>
      <div className="arrow">▹</div>
      <div>{tool}</div>
    </div>
  ));

  return (
    <div className="tools">
      <h3>Here's some tools I use</h3>
      <div className="tool-container">{toolHTML}</div>
    </div>
  );
};

export default Tools;
