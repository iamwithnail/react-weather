import axios from 'axios';
const API_KEY = '1d18247d1f11e681bc689f2c99cce2d0';

//Uses ES6 templatestrings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}