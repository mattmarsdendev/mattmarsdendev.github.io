import "./Footer.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Footer = () => {
  //   console.log(process.env);
  const [weather, setWeather] = useState({});

  const callWeather = async () => {
    const weatherData = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER}`
    );
    console.log(weatherData.data);
    setWeather(weatherData.data);
  };

  useEffect(() => {
    callWeather();
  }, []);

  return (
    <div className="footer-container">
      <div>
        {weather.main && (
          <div>
            {weather.main.temp} F {weather.weather[0].description}
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
