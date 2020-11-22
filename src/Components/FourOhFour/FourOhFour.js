import "./FourOhFour.scss";

const FourOhFour = () => {
  const starArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
  ];
  const starsHTML = starArr.map((star) => (
    <div
      className="star"
      style={{
        bottom: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ));

  return (
    <div className="fourohfour-container">
      {starsHTML}
      {/* will use this somewhere else cause its kinda cool */}
      {/* <div data-hover="404" className="fourohfour">
        404
      </div> */}
      <div className="sun"></div>
      <div className="title-container">
        <div className="moon-container">
          <div className="four">4</div>
          <div className="moon"></div>
          <div className="four">4</div>
        </div>
        <div className="just-space">NO PAGE HERE, JUST SPACE</div>
        <div className="go-home">GO HOME?</div>
      </div>
      <div className="spaceship-container">
        <div className="spaceship">
          {/* <div className="left-engine"></div>
          <div className="right-engine"></div> */}
          <div className="back-engine"></div>
        </div>
      </div>
      <div className="comet"></div>
      <div className="cloud"></div>
      <div className="cloud2"></div>
    </div>
  );
};
export default FourOhFour;
