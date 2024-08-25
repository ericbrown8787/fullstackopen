import { useEffect, useState } from "react";
import weatherService from "../services/weather";
const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    weatherService.getWeather(country).then((initialWeather) => {
      setWeather(initialWeather);
      console.log(initialWeather);
    });
  }, []);
  if (weather) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={crypto.randomUUID()}>{language}</li>
          ))}
        </ul>
        <div style={{ fontSize: 150 }}>{country.flag}</div>
        <h3>Weather in {country.capital[0]}</h3>
        <p>temperature {weather.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Icon representing current weather in capital city"
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }

  return <>loading...</>;
};

export default CountryInfo;
