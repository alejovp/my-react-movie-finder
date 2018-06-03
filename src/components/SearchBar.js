import React, { Component } from 'react';

import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group search-bar">
        <input
          type="text"
          className="form-control col-md-6"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;