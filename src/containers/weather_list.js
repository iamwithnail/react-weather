/**
 * Created by chris on 13/03/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparklinechart'



class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        // the list.map iterates over every item in that list and pulls off the main.temp item to a new array

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} colour="blue" units="K"/>
                </td>
                <td>
                    <Chart data={pressure} colour="black" units="hPA"/>
                </td>
                <td>
                    <Chart data={humidity} colour="purple" units="%"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
            <thead>
            <tr>
                <th> City</th>
                <th> Temperature (K)</th>
                <th> Pressure (Hpa)</th>
                <th> Humidity (%)</th>

            </tr>
            </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    // using just weather above maps to state.weather.
    //where the key and value share the name below, you can shorten to just the one thing, so instead of
    // weather: weather, you can just put { weather}; , as in this example.
    return { weather};
}

export default connect(mapStateToProps)(WeatherList);