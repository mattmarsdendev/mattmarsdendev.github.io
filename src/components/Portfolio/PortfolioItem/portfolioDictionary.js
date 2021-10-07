import cryptochartlight from "../../../Styles/Assets/cryptochartlight.png";
import cryptochartdark from "../../../Styles/Assets/cryptochartdark.png";
import nationalparks from "../../../Styles/Assets/nationalparks.png";
import trividuh from "../../../Styles/Assets/trividuh.png";

const portfolioDictionary = {
  cryptochart: {
    image: cryptochartlight,
    image2: cryptochartdark,
    text:
      "CryptoChart is a front-end react project that I built to help myself keep track of crypto prices without needing to forfeit my personal data to other services or manually track each one. Based off of Coinbase's design, I built the application using React, ChartJs, SASS and CryptoCompare's open API",
  },
  nationalparks: {
    image: nationalparks,
    image2: nationalparks,
    text:
      "I wanted a place to keep track of the national parks I've been to so I created a full stack application to do so! Client was built using JavaScript and React and the API was built using Node, Express and MongoDB with authorization handled by Auth0.",
  },
  trividuh: {
    image: trividuh,
    image2: trividuh,
    text:
      "A trivia application (and great timekiller) built with JavaScript and React. Answer questions, earn points and unlock new question sets!",
  },
};

export default portfolioDictionary;
