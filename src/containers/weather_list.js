import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesNormalBand } from 'react-sparklines'; //parent and child elements
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name; //key for children or iterator in an array
 		const temps = cityData.list.map(weather => (weather.main.temp - 273.15) * (9/5) + 32); //arrays for data
 		const pressures = cityData.list.map(weather => weather.main.pressure);
 		const humidities = cityData.list.map(weather => weather.main.humidity);
 		const { lon, lat } = cityData.city.coord; //destructured, find coord object, grab lon, lat props and assign as new vars, 
 		//and pass as props to GoogleMap


 		return ( //refactor chart into seperate component "Chart"
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="black" units="F" /></td>
				<td><Chart data={pressures} color="blue" units="hPa" /></td>
				<td><Chart data={humidities} color="orange" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)} 
				</tbody>
			</table>	
		); //map is js variable so {}
	}
}

function mapStateToProps( { weather }) { //dfines weather variable
	return { weather }; //with key and value the same === { weather: weather }
}

//connect function to component
export default connect(mapStateToProps)(WeatherList);