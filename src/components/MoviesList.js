import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MoviesList extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="row">
          Here will display the movies
        </div>
      </div>
    );
  }
}

export default MoviesList;