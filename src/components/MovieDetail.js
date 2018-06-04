import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieDetail } from '../actions';
import Loading from './Loading';

class MovieDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetail(id);
  }

  renderDetail() {
    const details = this.props.detail.detailData;

    if (this.props.detail.isLoading) {
      return <Loading />;
    }
    return (
      <div className="row">
      <Link to="/">Back</Link>
        <div className="col-sm">
          <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} alt="" />
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
          <p>Popularity: <span class="badge badge-secondary">{details.popularity}</span></p>
          <p>Vote Count: <span class="badge badge-secondary">{details.vote_count}</span></p>
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
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderDetail()}
      </div>
    );
  }
}

function mapStateToProps({detail}) {
  return { detail };
}

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetail);