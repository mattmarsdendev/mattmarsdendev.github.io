import "./Portfolio.scss";
import { FourOhFour } from "../index.js";
import { Link, Route, Switch } from "react-router-dom";
import PortfolioNav from "./PortfolioNav.js";
import PortfolioItem from "./PortfolioItem/PortfolioItem.js";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <PortfolioNav />
      <div className="portfolio-piece">
        <Switch>
          <Route exact path="/portfolio">
            <div className="portfolio-header">PORTFOLIO</div>
            <div className="portfolio-new-container">
              <div className="portfolio-new">
                <Link to="/portfolio/cryptochart">
                  <div className="clipped-element"></div>
                  <div className="new-project">new project!</div>
                </Link>
              </div>
            </div>
          </Route>
          <Route exact path="/portfolio/404" component={FourOhFour} />
          <Route exact path="/portfolio/snap">
            <iframe
              src="https://mmarsden89.github.io/snap/"
              title="snap"
              style={{
                height: "100%",
                width: "100%",
                border: "none",
              }}
            />
          </Route>
          <Route exact path="/portfolio/nationalparks">
            <PortfolioItem name="nationalparks" />
          </Route>
          <Route exact path="/portfolio/trividuh">
            <PortfolioItem name="trividuh" />
          </Route>
          <Route exact path="/portfolio/cryptochart">
            <PortfolioItem name={"cryptochart"} />
          </Route>
          <Route exact path="/portfolio/community">
            <PortfolioItem name="community" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
