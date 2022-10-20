import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=sp`
  console.log(apiUrl);
  const [cities, setCities] = useState([
    {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 30.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77,
    },
  ]);
  function onClose(e,id) {
    e.preventDefault()
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(
      apiUrl
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log(recurso);
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon, 
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <div className="blurredBg" >
        <Nav onSearch={onSearch} />
        <Cards onClose={onClose} cities={cities} />
        <h5 className="firma" >Developed By Ignacio Iglesias</h5>
      </div>
    </div>
  );
}
