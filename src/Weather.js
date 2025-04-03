import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Burnaby, Canada</h1>
      <ul>
        <li>Wednesday 12:10 PM</li>
        <li>Mostly Cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly-cloudy-icon"
          />{" "}
          10 °F | °C{" "}
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 49% </li>
            <li>Humidity: 73%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
