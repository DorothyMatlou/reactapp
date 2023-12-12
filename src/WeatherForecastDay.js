import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherforecastDay(props) {
  return (
    <div>
      <div className="WeatherForecastDay">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temperatures-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
