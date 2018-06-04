import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetail } from '../actions';

class MovieDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetail(id);
  }

  render() {
    return (
      <div>
        Component MovieDetail
      </div>
    );
  }
}

export default connect(null, { fetchMovieDetail })(MovieDetail);