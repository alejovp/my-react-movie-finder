import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creators
import { searchMovie } from '../actions';
import './FetchMore.css';

class FetchMore extends Component {
  constructor(props) {
    super(props);

    // Binding the context in order to use this inside callbacks
    this.onSearchMore = this.onSearchMore.bind(this);
  }

  onSearchMore() {
    const { page, total_pages } = this.props.movies.moviesData;
    const { term } = this.props.movies;

    if (page < total_pages) {
      this.props.searchMovie(term, page + 1);
    }
  }

  render() {
    
    return (
      <div className="row fetch-btn">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={this.onSearchMore}>Show more results</button>
      </div>
    );
  }
}

// Mapping dispatch to props shortcut
function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, { searchMovie })(FetchMore);