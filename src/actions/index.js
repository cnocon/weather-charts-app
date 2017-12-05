import axios from 'axios';
// api key for https://openweathermap.org/
const API_KEY = 'e540b6aaedda8283a9241849a10e2ea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city},us`;
  // axios docs https://www.npmjs.com/package/axios
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
