import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER: 
	//	return state.concat([action.payload.data]); //must concat and not push because we dont want to mutate state, but return a new instance of state. return payload to array to collect onscreen. 
		return [ action.payload.data, ...state ]; //inserts new array in front. 
	}
	return state;
}