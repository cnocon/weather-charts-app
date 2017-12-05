import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="display-4 mt-4 text-center">5-Day Weather Forecast</div>
        <div className="row mt-4"><div className="col-sm-12">
          <SearchBar />
        </div></div>
        <div className="row mt-4"><div className="col-sm-12">
          <WeatherList />
        </div></div>
      </div>
    );
  }
}
