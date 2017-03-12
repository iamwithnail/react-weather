/**
 * Created by chris on 12/03/2017.
 */
import React, { Component } from 'react';
const API_KEY = '1d18247d1f11e681bc689f2c99cce2d0'
const endpoint = 'api.openweathermap.org/data/2.5/forecast?q={city name},{country code}'

export default class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange =this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
        <form
            className="input-group"
            onSubmit={this.onFormSubmit}>
            <input

            placeholder="Get a five day forecast for your city!"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
        );
    }

}
