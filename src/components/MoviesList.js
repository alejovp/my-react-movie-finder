import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopularMovies } from '../actions';

import SearchBar from './SearchBar';

class MoviesList extends Component {
  componentWillMount() {
    this.props.fetchPopularMovies();
  }

  renderMovie(movie) {
      return (
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..." />
          <div className="card-body">
            <h4 className="card-title">{movie.original_title}</h4>
            <p className="card-text">{movie.overview}</p>
            <a href="" class="btn btn-primary" role="button">Button</a>
          </div>
        </div>
      );
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="card-columns">
          { this.props.movies.moviesData.map(this.renderMovie) }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, {fetchPopularMovies})(MoviesList);