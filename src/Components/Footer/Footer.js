import "./Footer.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import apiUrl from "../../apiConfig";
const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const Footer = () => {
  const [weatherObj, setWeatherObj] = useState({
    main: {},
    weather: [{ icon: "04n" }],
  });
  const [currentTime, setCurrentTime] = useState("");

  const { main, weather } = weatherObj;
  const { temp } = main;
  const { description, icon } = weather[0];

  const callWeather = async () => {
    const weatherData = await axios(apiUrl);
    setWeatherObj(weatherData.data);
  };

  const setTime = () => {
    const ptTime = dayjs().utcOffset(-8).format("h:mm a");
    setCurrentTime(ptTime);
  };

  useEffect(() => {
    callWeather();
    const ptTime = dayjs().utcOffset(-8).format("h:mm a");
    setCurrentTime(ptTime);
    setInterval(setTime, 10000);
  }, []);

  return (
    <div className="footer-container">
      <div className="weather-container">
        <div className="weather-temp">{Math.round(temp)}°F</div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="weather-desc">{description}</div>
      </div>
      <div className="copyright">© Matt Marsden 2020</div>
      <div className="time">{currentTime} PT</div>
    </div>
  );
};

export default Footer;
