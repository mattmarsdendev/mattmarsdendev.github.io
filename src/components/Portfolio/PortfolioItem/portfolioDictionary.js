import cryptochartlight from "../../../Styles/Assets/cryptochartlight.png";
import cryptochartdark from "../../../Styles/Assets/cryptochartdark.png";
import nationalparks from "../../../Styles/Assets/nationalparks.png";
import trividuh from "../../../Styles/Assets/trividuh.png";
import communitygame from "../../../Styles/Assets/communitygame.png";

const portfolioDictionary = {
  cryptochart: {
    image: cryptochartlight,
    image2: cryptochartdark,
    links: [
      {
        name: "front-end repo",
        link: "https://github.com/mmarsden89/cryptochart",
      },
      {
        name: "deployed app",
        link: "https://mmarsden89.github.io/cryptochart/#/",
      },
    ],
    text:
      "CryptoChart is a front-end React web-application that I built to help myself keep track of crypto prices without needing to forfeit my personal data to other services or manually track each one. Based off of Coinbase's design, I built the application using React, ChartJs, SASS and CryptoCompare's open API",
  },
  nationalparks: {
    image: nationalparks,
    image2: nationalparks,
    links: [
      {
        name: "front-end repo",
        link: "https://github.com/mmarsden89/national-park",
      },
      {
        name: "back-end-repo",
        link: "https://github.com/mmarsden89/national-parks-backend",
      },
      {
        name: "deployed app",
        link: "https://mmarsden89.github.io/national-park/",
      },
    ],
    text:
      "A place to keep track of national park visits. The front-end client was built using JavaScript and React and the API was built using Node, Express and MongoDB with authorization handled by Auth0.",
  },
  trividuh: {
    image: trividuh,
    image2: trividuh,
    links: [
      {
        name: "front-end repo",
        link: "https://github.com/mmarsden89/trividuh",
      },
      { name: "deployed app", link: "https://mmarsden89.github.io/trividuh/" },
    ],
    text:
      "A trivia application (and great timekiller) built with JavaScript, React and SASS. Given a JSON file and a few user stories, I was tasked to build this application in four days. Meeting the goals quickly, I decided to build out the application a bit more to include other (and more difficult) question sets unlockable by a points system",
  },
  community: {
    image: communitygame,
    image2: communitygame,
    links: [
      {
        name: "deployed app",
        link: "https://mmarsden89.github.io/community-client/",
      },
    ],
    text:
      "Community was my first crack at a full-stack project. We were tasked with building a CRUD application but I wanted to put a spin on it. Community was a place my classmates and I could gather in a virtual environment. Built using JavaScript, HTML Canvas, Ruby and Ruby on Rails.",
  },
};

export default portfolioDictionary;
