import axios from "axios";
const api_key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
const baseUrl = `http://api.openweathermap.org/`;

const getWeather = (country) => {
  const request = axios.get(
    `${baseUrl}data/2.5/weather?q=${country.capital[0]},${country.name.common}&units=metric&APPID=${api_key}`
  );
  return request.then((response) => response.data);
};
export default { getWeather };
