# Weather Charts App
based on fork of https://github.com/StephenGrider/ReduxSimpleStarter.git
What we're building
![](https://www.dropbox.com/s/tkxfwms3q1fuldy/Screenshot%202017-12-05%2010.23.00.png?raw=1)

First container: search bar (it's a container because it needs to talk to redux, bc it's input determines what shows on hte page, so there's events)

# AJAX w/Redux
![middleware chart](https://www.dropbox.com/s/43jhpcjb7uia6co/Screenshot%202017-12-05%2010.53.54.png?raw=1)
Middlewares take the action, and depending on the action type or any other factor, the middleware can choose to let the action pass through, manipulate it, stop it all together whatever BEFORE they reach a reducer. They're kind of like gatekeepers.

For helping w/ajax requests:
`npm install --save redux-promise`

Hook it up via src/index.js: 
`import ReduxPromise from 'redux-promise';`
`const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);`

# Creating the ajax request
Our app state holds all the data of our application, including the weather data. We only change our application state through our reducers and actions, so to load our weather data, we need to dispatch an action (call an action creator) that is responsible for making that ajax request.
// action creators always have to return action with type and optionally a payload

we'll use axios module to simplify making the ajax request (so we don't have to include the entire jquery library)
`npm install --save axios`


# Adding a reducer
User submits form which calls action creator (and passes city), we then craft url w/city, and make an ajax request w/axios. Axios returns a promise. A promise is a data structure that doesn't yet contain the request data 

**_it's important to note that we're returning teh promise in the payload key in the fetchWeather action creator (see actions/index.js)_**
> **HERE'S WHERE MIDDLEWARE IS FANTASTIC: redux promise it forces the action return statement to wait until the promise from the ajax request (well, the axios call) finalizes into an object - so the payload is an actual object and exists - SUPER HELPFUL.**

![redux promise as middleware](https://www.dropbox.com/s/0t63yl5g8uwy7ad/Screenshot%202017-12-05%2011.45.44.png?raw=1)

> **NEVER mutate the current state in your reducer; you want to return a brand new object. so instead of doing something like `return state.push(action.payload.data)`, which mutates the original state array, you want to use a method that creates a new object, like `.concat`, which takes two arrays and creates a new one, like `return state.concat([action.payload.data]);`**

---

# For containers
Example: the WeatherList container (containers/weather_list)
```js
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class WeatherList extends Component {
  // ...
}

function mapStateToProps({weather}) { // ES6 equivalent to function mapStateToProps(state) {
  return { weather }; // ES6 equivalent to return { weather: state.weather };
}

export default connect (mapStateToProps)(WeatherList);
```

---

# Mapping props to a render helper
https://www.udemy.com/react-redux/learn/v4/t/lecture/4284608?start=0

![Redux State diagram](https://www.dropbox.com/s/92ozsxpcgkwbhzy/Screenshot%202017-12-05%2012.48.23.png?raw=1)

---
ref is a utillity in react that gives you a direct reference to this element w/the ref='' that you can reference anywhere else inside the component via this.refs.map
`return <div ref="map" />`

```js
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
```

> ---
> **es6 syntax**
> 
> in es6,
> ```js
> const { lon, lat } = cityData.city.coord;
> ```
> is equivalent to 
> ```js
> const lon = cityData.city.coord.lon;
> const lat = cityData.city.coord.lat;
> ```
> ---














# Boilerplate: ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
