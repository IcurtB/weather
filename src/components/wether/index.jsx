import React, { useEffect, useState } from "react";
import { CardWeather } from "./card-weather";
const BASE_URL = new URL("http://api.openweathermap.org");
const KEY = "805df7ee7abbf9d4902605f53067e86d";

function weatherURL(city) {
  const _URL = new URL("/data/2.5/weather", BASE_URL);
  _URL.searchParams.set("appid", KEY);

  _URL.searchParams.set("q", city ?? "Бишкек");
  _URL.searchParams.set("units", "metric");
  _URL.searchParams.set("lang", "ru");
  return _URL;
}

function forecastURL(coord) {
  const _URL = new URL(`/data/2.5/forecast`, BASE_URL);
  _URL.searchParams.set("appid", KEY);
  _URL.searchParams.set("lat", coord.lat);
  _URL.searchParams.set("lon", coord.lon);
  _URL.searchParams.set("units", "metric");
  _URL.searchParams.set("lang", "ru");
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

  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    const coord = openWeatherMap?.coord;
    if (coord) {
      fetch(forecastURL(coord))
        .then((response) => response.json())
        .then((data) => setForecast(data))
        .catch((e) => {
          console.log("error", e);
          setForecast(null);
        });
    }
  }, [openWeatherMap]);

  return (
    <div className="py-4">
      <CardWeather {...openWeatherMap} {...forecast} />
    </div>
  );
};
