import React, { Component } from 'react';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input placeholder="Search for a City"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-button">
          <button className="btn btn-primary btn-sm" type="submit">Search</button>
        </span>
      </form>
    )
  }
}
