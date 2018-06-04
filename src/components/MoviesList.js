import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { isLoading, moviesData } = this.props.movies;
    if (isLoading) {
      return <Loading />;
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
              <Link to={`/detail/${movie.id}`} className="btn btn-primary">More ></Link>
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