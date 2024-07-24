import SearchBox from "./SearchBox";
import Box from "./Box";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Karnal",
      feelsLike: 38.79,
      humidity: 66,

      temp: 31.92,

      tempMax: 31.92,
      tempMin: 31.92,

      weather: "broken clouds",
    });
    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
    };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <b>Weather App By Rishav</b>
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <Box info={weatherInfo} />
    </div>
  );
}
