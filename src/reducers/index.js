import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer //responsible for the weather part of our state. 
});

export default rootReducer;
