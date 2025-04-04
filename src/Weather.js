import React, { state } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showTemp(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.humidity,
      city: response.data.name,
      description:response.data.description,
      iconUrl:
    setReady(true);
  }

  if (ready) {
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
        <h1>{setWeatherData.city}</h1>
        <ul>
          <li>Wednesday 12:10 PM</li>
          <li>{setWeatherData.description} </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherData.iconUrl}
                alt="partly-cloudy-icon"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">10</span>
                <span className="unit">°F | °C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {setWeatherData.humidity}%</li>
              <li>Wind: {setWeatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let city = setWeatherData.city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
}
