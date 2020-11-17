import "./Welcome.scss";

const Welcome = () => {
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

  const toolHTML = tools.map((tool) => (
    <div className="single-tool">
      <div className="arrow">▹</div>
      <div>{tool}</div>
    </div>
  ));

  return (
    <div className="welcome">
      <div className="introduction">
        <h1>Hi, I'm Matt! I build things for the web</h1>
        <h3>
          I specialize in the front end but have professional full stack
          experience
        </h3>
      </div>
      <div className="tools">
        <h3>Here's some tools I use</h3>
        <div className="tool-container">{toolHTML}</div>
      </div>
    </div>
  );
};

export default Welcome;
