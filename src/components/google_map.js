import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() { //lifecycle methods that auto runs when component gets rendered to the screen
		new google.maps.Map(this.refs.map, { //will find ref.map and render embebbed map into html eleement
			zoom:12, // zoom level, 
			center: { //what lat, long to center on. 
				lat: this.props.lat,
				lng: this.props.lon //lng lon different from weather api and google api
			}
		});
	}

	render() { //direct html element that's been rendered to the screen. 
	//can give direct reference anywehere else with this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;