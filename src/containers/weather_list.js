import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';

export class WeatherList extends Component {
  renderWeather(cityData) {
    // i added this to prevent not found errors
    if (!cityData) {
      return (
        <tr><td colSpan="4" className="text-center"><h5><span className="badge badge-danger">No Data Available</span></h5></td></tr>
      );
      return;
    }
    const name = cityData.city.name;
    const tempsKelvin = cityData.list.map(weather => { return weather.main.temp } );
    const temps = tempsKelvin.map((temp) => {return temp * (9/5) - 459.67});
    const pressures = cityData.list.map(weather => { return weather.main.pressure });
    const humidities = cityData.list.map(weather => { return weather.main.humidity });

    return (
      <tr key={ name }>
        <td className="align-middle"><h4>{ name }</h4></td>
        <td className="align-bottom text-center"><Chart data={temps} units="&deg;F" color='#0526fd' /></td>
        <td className="align-bottom text-center"><Chart data={pressures} units=" mb" color='#1077ff' /></td>
        <td className="align-bottom text-center"><Chart data={humidities} units="%" color='#22ffa1' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover table-bordered">
        <thead><tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr></thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}) { // ES6 equivalent to function mapStateToProps(state) {
  return { weather }; // ES6 equivalent to return { weather: state.weather };
}

export default connect (mapStateToProps)(WeatherList);
