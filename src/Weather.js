import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, SetWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    SetWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Wednesday 07:00 AM",
      wind: response.data.wind.speed,
      decription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      precipitation: response.data.main.precipitation,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.decription}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt="partly cloudy icon"
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind-Speed: {weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let city = "Cape Town";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
