import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopularMovies } from '../actions';

import SearchBar from './SearchBar';

class MoviesList extends Component {
  componentWillMount() {
    this.props.fetchPopularMovies();
  }

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

export default connect(null, {fetchPopularMovies})(MoviesList);