import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function WeatherForecast() {
  const baseURL =
    "http://api.weatherapi.com/v1/forecast.json?key=3f7bf0d64c0a43dea8131813221304&q=-7.0051453,110.4381254&days=1";

  const [appState, setAppState] = useState({ hourly: [] });
  useEffect(() => {
    axios.get(baseURL).then((resp) => {
      setAppState({
        hourly: resp.data.forecast.forecastday[0].hour,
        current: parseInt(
          JSON.stringify(resp.data.current.last_updated).slice(12, 14)
        ),
      });
    });
  }, [appState]);

  return (
    <div className="mt-4 p-5 Card__weather">
      <div className="row">
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 1].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 1].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 1].condition.text}</p>
        </div>
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 2].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 2].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 2].condition.text}</p>
        </div>
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 3].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 3].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 3].condition.text}</p>
        </div>
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 4].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 4].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 4].condition.text}</p>
        </div>
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 5].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 5].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 5].condition.text}</p>
        </div>
        <div className="col-2 text-center">
          <p>{appState.hourly[appState.current + 6].time.slice(11, 16)}</p>
          <img
            src={
              "https:" + appState.hourly[appState.current + 6].condition.icon
            }
            alt=""
            className="Icon__weather"
          />
          <p>{appState.hourly[appState.current + 6].condition.text}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
