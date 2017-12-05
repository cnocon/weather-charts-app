import React, { Component } from 'react';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    // this.onInputChange = this.onInputChange.bind(this); I used an arrow function instead
  }
  onInputChange(event) {
    console.log(this.state.term);
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <form className="input-group">
        <input placeholder="Search for a City" value={this.state.term} onChange={(event) => { this.onInputChange(event)} }/>
        <span className="input-group-button">
          <button className="btn btn-primary btn-sm" type="submit">Search</button>
        </span>
      </form>
    )
  }
}
