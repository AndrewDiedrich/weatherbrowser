import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			term: ''
		};
//interconstructor - instead of fat arrow function in value js in input. 
//bind OnInputChange func to (this) Searchbar, then replace this instance of onInputChange with 
//this.onInputChange.
		this.onInputChange = this.onInputChange.bind(this); //if passing callback than have to bind it to this to setState
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) { //new function on our class, all DOM event handlers have this event object
		console.log(event.target.value)
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
	//we need to add/fetch weather data 
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''}); //input value will rerender and appear to be empty to the user. 
	}

	render() {
		return ( //turn input into controlled field, it's a form element with the value of the input set by
			//state of component. say declaritively what the state is, this.state. 
			<form onSubmit={this.onFormSubmit} className="input-group"> 
				<input 
					placeholder="Get a 5-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term} //this and onChange make this a controlled component with state. doesnt update in input if its just calling this.state.term.
					onChange={this.onInputChange} //if passing callback func, then you have to bind it to (this) if you setState. run onInputChange func//
				/> 
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>

		);
	}
}

//hook action creator fetchweather to container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch); //gives acces to our fetchWeather function in this component. 
}

export default connect(null, mapDispatchToProps)(SearchBar);
//null because this container doesn't care about state from redux, 