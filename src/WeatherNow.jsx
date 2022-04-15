import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function WeatherNow() {
  const [locState, setLocState] = useState({ lat: "", long: "", msg_err: "" });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocState({ msg_err: "The Browser Does not Support Geolocation" });
    }
  }

  function showPosition(position) {
    setLocState({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  function showError(error) {
    if (error.PERMISSION_DENIED) {
      setLocState({
        msg_err: "The User have denied the request for Geolocation.",
      });
    }
  }

  const baseURL =
    "http://api.weatherapi.com/v1/current.json?key=3f7bf0d64c0a43dea8131813221304&q=-7.0051453,110.4381254"

  const [appState, setAppState] = useState({
    lokasi: "",
    waktu: "",
    suhu: "",
    kondisi: "",
    icon_kondisi: "",
  });
  console.log(baseURL)
  useEffect(() => {
    axios
      .get(baseURL)
      .then((resp) => {
        setAppState({
          lokasi: resp.data.location.name,
          waktu: resp.data.location.localtime,
          suhu: resp.data.current.temp_c,
          kondisi: resp.data.current.condition.text,
          icon_kondisi: resp.data.current.condition.icon,
        });
        console.log(resp.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div className="mt-4 p-5 Card__weather">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <img
            src={"https:" + appState.icon_kondisi}
            alt=""
            className="Icon__weather"
          />
          <h1 className="fs-3">{appState.kondisi}</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-2">
          <div className="row">
            <div className="col-4">
              <h5 className="text-start">Location</h5>
            </div>
            <div className="col-10">
              <h3 className="text-start fs-1">{appState.lokasi}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h5 className="text-start">Time</h5>
            </div>
            <div className="col-10">
              <h3 className="text-start fs-1">{appState.waktu}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h5 className="text-start">Temp.</h5>
            </div>
            <div className="col-10">
              <h3 className="text-start fs-1">
                {appState.suhu}
                <sup>o</sup>C
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherNow;
