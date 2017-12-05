import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="display-4">5-Day Weather Forecast</div>
        <div className="row"><div className="col">
          <SearchBar />
        </div></div>
        <div className="row"><div className="col">
          <WeatherList />
        </div></div>
      </div>
    );
  }
}
