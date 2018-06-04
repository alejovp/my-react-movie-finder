import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creators
import { fetchPopularMovies } from '../actions';
// components
import SearchBar from './SearchBar';
import Loading from './Loading';

class MoviesList extends Component {
  componentWillMount() {
    this.props.fetchPopularMovies();
  }

  renderMovies() {
    if (this.props.movies.isLoading) {
      return <Loading />;
    }
    return this.props.movies.moviesData.map(movie => {
        return (
          <div className="card" key={movie.id}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..." />
            <div className="card-body">
              <h4 className="card-title">{movie.original_title}</h4>
              <p className="card-text">{movie.overview}</p>
              <a href="" className="btn btn-primary" role="button">Button</a>
            </div>
          </div>
        );
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="card-columns">
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, {fetchPopularMovies})(MoviesList);