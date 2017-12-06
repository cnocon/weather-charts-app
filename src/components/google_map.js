import React, { Component } from 'react';

class GoogleMap extends Component {
/**
  * componentDidMount is called after this component is rendered to the screen
  */
  componentDidMount() {
  /**
    * new google.maps.Map is how we create an embedded google map inside our document
    * google.maps.map takes a reference to a DOM node (this.refs.map), then
    * it finds that element on the screen, and renders an embedded map into it
    */
    new google.maps.Map(this.refs.map, {
    /**
      * Level 12 zoom allows zooming in enough to get good glimpse of city
      */
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
