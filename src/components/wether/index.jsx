import React, { useEffect, useState } from "react";
import { CardWeather } from "./card-weather";
const BASE_URL = new URL("http://api.openweathermap.org");
const KEY = "805df7ee7abbf9d4902605f53067e86d";

const countriesURL = new URL("https://restcountries.com/v3.1/name");

function weatherURL(city) {
  const _URL = new URL("/data/2.5/weather", BASE_URL);
  _URL.searchParams.set("appid", KEY);

  _URL.searchParams.set("q", city ?? "Бишкек");
  // _URL.searchParams.set("limit", "10");
  _URL.searchParams.set("units", "metric");
  return _URL;
}
const openWeatherMapIcon = (icon) =>
  new URL(`https://openweathermap.org/img/wn/${icon}.png`);

function forecastURL(coord) {
  const _URL = new URL(`/data/2.5/forecast`, BASE_URL);
  _URL.searchParams.set("appid", KEY);
  _URL.searchParams.set("lat", coord.lat);
  _URL.searchParams.set("lon", coord.lon);
  _URL.searchParams.set("units", "metric");
  return _URL;
}
export const Weather = () => {
  const [openWeatherMap, setOpenWeatherMap] = useState(null);

  async function fetchWeather() {
    await fetch(weatherURL())
      .then((res) => res.json())
      .then((data) => {
        setOpenWeatherMap(data);
      })
      .catch((e) => {
        console.log("error", e);
        setOpenWeatherMap(null);
      });
  }
  const [forecast, setForecast] = useState(null);
  async function fetchOneCall() {
    const coord = openWeatherMap?.coord;
    if (coord) {
      await fetch(forecastURL(coord))
        .then((response) => response.json())
        .then((data) => setForecast(data))
        .catch((e) => {
          console.log("error", e);
          setForecast(null);
        });
    }
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    fetchOneCall();
  }, [openWeatherMap]);
  const weather = openWeatherMap?.weather;
  console.log("openWeatherMap", openWeatherMap);
  return (
    <div>
      {weather
        ? weather.map(({ id, icon, description }) => (
            <img key={id} src={openWeatherMapIcon(icon)} alt={description} />
          ))
        : null}
      <CardWeather {...openWeatherMap} />
    </div>
  );
};
