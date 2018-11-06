import axios from 'axios';

const API_KEY = 'bca4ad126d14002f734a6c3c1ff8035d';
const 	ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` //ES6 TEMPLETE STRING, injects js var into string with backticks

//const action type
export const FETCH_WEATHER = 'FETCH_WEATHER'; //actiontype to keep actions consistent through reducers and creators

//create action creator to make api request to fetch api data
export function fetchWeather(city) {//takes city string as part of search query from api request
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); //will return promise "request" from its AJAX request ; promise doesn't return data yet

	return { //action creator always returns an action with a type!!!!!
		type: FETCH_WEATHER, //
		payload: request //additional info about action, the api request. passes request into actions payload property. the promise doesnt actual return data
	}; //redux promise middleware, allows to make promise from payload. will send action onto reducers once resolved.
}

/* redux promise is a middleware. it stops a promise from the action and looks at payload prop, if a promise, then stops action and waits until
request is finished, it dispatches a new action of same type but with payload of resolved request to reducer

*/