import axios from 'axios';
const API_KEY = '1d18247d1f11e681bc689f2c99cce2d0';

//Uses ES6 templatestrings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);
    //request is a Promise, so doesn't yet contain any data - but we'll return it on the payload key.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
//because we're using redux-promise, it sees the action and the payload property - if the payload is a promise,
//redux promise stops it the Action entirely, and once the request is finished, it emits another Action wtih the same
// type, but having resolved the promise - it unwraps the promise.
