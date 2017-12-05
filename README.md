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





---

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
