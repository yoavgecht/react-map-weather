import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart'
import Map from '../components/Map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td><Map lon={lon} lat={lat}/></td>
                <td><Chart color="orange" data={temps} units="C"/></td>
                <td><Chart color="green" data={pressure} unit="bar"/></td>
                <td><Chart color="black" data={humidities} unit="g/m^3"/>
                </td>
            </tr>

        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (C)</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)