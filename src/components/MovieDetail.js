import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieDetail } from '../actions';
import Loading from './Loading';
import './MovieDetail.css';

class MovieDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetail(id);
  }

  render() {
    const details = this.props.detail.detailData;

    if (this.props.detail.isLoading) {
      return <Loading />;
    }

    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <Link to="/" className="btn btn-outline-secondary btn-right">&lt; Go Back</ Link>
            <h2 className="jumbotron-heading">Movie Details</h2>
          </div>
        </div>
        <div className="container pad-bot">
          <div className="row">
            <div className="col-sm">
              <div className="text-center">
                <img className="img-thumbnail"
                  src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
                  alt={details.title} />
              </div>
              <hr />
              <h3>{details.title}</h3>
              <h5>{details.tagline}</h5>
            </div>
            <div className="col-sm">
              <p>{details.overview}</p>
              <hr />
              <p>Release date: {details.release_date}</p>
              <p>Runtime: {details.runtime} min</p>
              <p>Budget: {details.budget}$</p>
              <p>Revenue: {details.revenue}$</p>
              <p>Popularity: <span className="badge badge-secondary">{details.popularity}</span></p>
              <p>Vote Count: <span className="badge badge-secondary">{details.vote_count}</span></p>
              <p>Vote Average:</p>
              <div className="progress">
                <div className="progress-bar"
                  role="progressbar"
                  style={{ width: `${details.vote_average * 10}%` }}
                  aria-valuenow={details.vote_average * 10}
                  aria-valuemin="0"
                  aria-valuemax="100">{details.vote_average}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({detail}) {
  return { detail };
}

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetail);