import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover table-bordered">
        <caption>5 Day Weather Forecast</caption>
        <thead><tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr></thead>
        <tbody>
          <tr><td>Some City</td></tr>
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}) { // ES6 equivalent to function mapStateToProps(state) {
  return { weather }; // ES6 equivalent to return { weather: state.weather };
}

export default connect (mapStateToProps)(WeatherList);
