import "./Footer.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [weatherObj, setWeatherObj] = useState({
    main: {},
    weather: [{}],
  });

  const { main, weather } = weatherObj;
  const { temp } = main;
  const { description, icon } = weather[0];

  const callWeather = async () => {
    const weatherData = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER}`
    );
    setWeatherObj(weatherData.data);
  };

  useEffect(() => {
    callWeather();
  }, []);

  return (
    <div className="footer-container">
      <div className="weather-container">
        <div className="weather-temp">{Math.round(temp)} F</div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="weather-desc">{description}</div>
      </div>
    </div>
  );
};

export default Footer;
