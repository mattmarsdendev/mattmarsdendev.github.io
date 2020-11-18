import "./Footer.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment-timezone/moment-timezone";

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
    const weatherData = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER}`
    );
    setWeatherObj(weatherData.data);
  };

  const setTime = () => {
    moment.tz.add("America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0");
    setCurrentTime(moment.tz("America/Los_Angeles").format("h:mm a"));
  };

  useEffect(() => {
    callWeather();
    setCurrentTime(moment().format("h:mm a"));
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
