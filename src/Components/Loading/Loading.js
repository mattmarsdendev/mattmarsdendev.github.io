import "./Loading.scss";

const Loading = (props) => {
  const { sizeX, sizeY } = props;
  return (
    <div
      className="loading-container"
      style={{ width: `${sizeY}%`, height: `${sizeX}%` }}
    >
      <div className="loading-animation"></div>
      <div className="outer-ring"></div>
      <div className="inner-ring"></div>
      <div className="letter-m">M</div>
    </div>
  );
};

export default Loading;
