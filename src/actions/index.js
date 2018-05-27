import axios from 'axios'
const API_KEY = '81b46d587d200cc1814f1c351408534f';
let rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
    const url = `${rootUrl}&q=${city},us`;
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
        }
}