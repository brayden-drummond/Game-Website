import React, { useState } from 'react';
import {api} from './api'


function WeatherApp() {

  const dateBuilder = (d: any) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  const search = (evt: any) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  return (
    <div className="app">
      <main>
        <div className="search-box">
        <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temperature">Temperature: {Math.round(weather.main.temp)}°c
          </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </div>
        ) : ''}
      </main>
    </div>
  );
}

export default WeatherApp;