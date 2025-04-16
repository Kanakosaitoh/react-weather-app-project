import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Kanakosaitoh" rel="github account">
            Kanako Saitoh
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Kanakosaitoh/react-weather-app-project"
            rel="GitHub repository"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/react-weather-app-project-kanakos/overview"
            rel="netlify site"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
