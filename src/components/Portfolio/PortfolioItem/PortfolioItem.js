import portfolioDictionary from "./portfolioDictionary.js";

const PortfolioItem = (props) => {
  console.log(props);
  console.log("hi");
  const { name } = props;
  return (
    <div className="portfolio-item-container">
      <img
        src={portfolioDictionary[name].image}
        style={{ width: "100%", height: "100%" }}
      />
      <p>{portfolioDictionary[name].text}</p>
    </div>
  );
};

export default PortfolioItem;
