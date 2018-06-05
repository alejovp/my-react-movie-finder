import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// action creators
import { fetchPopularMovies } from '../actions';
// components
import SearchBar from './SearchBar';
import Loading from './Loading';

class MoviesList extends Component {

  componentDidMount() {
    // if we haven't done a search yet then fetch for popular movies
    if (this.props.movies.moviesData.length === 0) {
      
      this.props.fetchPopularMovies();
    }
  }

  renderMovies() {
    const { isLoading, moviesData } = this.props.movies;

    if (isLoading) {
      return <Loading />;
    }
    if (moviesData.length === 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No movies were found for the term , please check the spelling and try again!
        </div>
      );
    }
    return moviesData.map(movie => {
        return (
          <div className="card" key={movie.id}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="..." />
            <div className="card-body">
              <h3 className="card-title">{movie.original_title}</h3>
              <p className="card-text">{movie.overview}</p>
              <Link to={`/detail/${movie.id}`} className="btn btn-outline-secondary">Read More &gt;</Link>
            </div>
          </div>
        );
    });
  }

  render() {
    const { moviesData } = this.props.movies;

    return (
      <div>
        <SearchBar />
        <div className="container">
          <div className={moviesData.length > 0 ? 'card-columns' : ''}>
            {this.renderMovies()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

export default connect(mapStateToProps, {fetchPopularMovies})(MoviesList);