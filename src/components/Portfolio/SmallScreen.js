const SmallScreen = () => {
  return (
    <div className="smallscreen-container">
      <div className="introduction">
        <h1 className="hello">Hi, I'm Matt! I build things for the web</h1>
        <h3 className="specialize">
          I specialize in the front end but have professional full stack
          experience
        </h3>
      </div>
      <div className="tools">
        <h3>Here's some tools I use</h3>
        <div className="tool-container">
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>JavaScript</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>Python</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>(Postgre)SQL</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>React</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>Node</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>Express</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>MongoDb</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>AWS</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>Git / Github</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>HTML</div>
          </div>
          <div className="single-tool">
            <div className="arrow">▹</div>
            <div>(S)CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreen;
