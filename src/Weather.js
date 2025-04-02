import React from "react";
export default function Weather() {
  return (
    <div className="container">
      <h1>Burnaby, Canada</h1>
      <h3>Mostly Cloudy, 12:10 PM</h3>
      <div className="row">
        <div className="col-6">
          <span>icon 10 °F | °C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 49% </li>
            <li>Humidity: 73%</li>
            <li>Wind: 3 km/h</li>
            <li>UV Index: 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
