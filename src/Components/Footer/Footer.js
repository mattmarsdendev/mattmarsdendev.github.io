import "./Footer.scss";
import axios from "axios";
import React, { useState } from "react";

const Footer = () => {
  //   console.log(process.env);
  const [weather, setWeather] = useState({});

  const callWeather = async () => {
    const weatherData = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER}`
    );
    console.log(weatherData.data);
    setWeather(weatherData.data.main);
  };

  callWeather();
  return <div className="footer-container">{weather.temp} F</div>;
};

export default Footer;
