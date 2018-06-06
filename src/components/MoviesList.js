import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// action creators
import { fetchPopularMovies } from '../actions';
// components
import SearchBar from './SearchBar';
import Loading from './Loading';
import FetchMore from './FetchMore';

class MoviesList extends Component {

  componentDidMount() {
    const { movies = [] } = this.props;
    // if we haven't done a search yet then fetch for popular movies
    if (movies.length === 0) {
      
      this.props.fetchPopularMovies();
    }
  }

  renderMovies() {
    const { isLoading, movies = [] } = this.props;

    if (isLoading) {
      return <Loading />;
    }
    if (movies.length === 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No movies were found for the term , please check the spelling and try again!
        </div>
      );
    }
    return movies.map(movie => {
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

  renderFetchMore() {
    const { isPopular } = this.props;

    if (!isPopular) {
      return <FetchMore />;
    }
  }

  render() {
    const moviesList = this.props.movies || [];

    return (
      <div>
        <SearchBar />
        <div className="container">
          <div className={moviesList.length > 0 ? 'card-columns' : ''}>
            {this.renderMovies()}
          </div>
          {this.renderFetchMore()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    movies: state.movies.moviesData.results,
    isLoading: state.movies.isLoading,
    isPopular: state.movies.isPopular
   };
}

export default connect(mapStateToProps, {fetchPopularMovies})(MoviesList);