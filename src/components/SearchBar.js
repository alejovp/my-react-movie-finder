import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creators
import { searchMovie } from '../actions';
// components
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // Binding the context in order to use this inside callbacks
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchMovie(this.state.term, 1);
    this.setState({ term: '' });
  }

  renderSubTitle() {
    const { isPopular, movies = [] } = this.props;

    if (isPopular) {
      return <h2 className="jumbotron-heading">Popular Movies</h2>;
    }

    return (
      <div>
        <h2 className="jumbotron-heading">Movie Results</h2>
        <p>{movies.length} movies found!</p>
      </div>
    );
  }

  render() {
  
    return (
      <div className="jumbotron text-center">
        <div className="container">
          <p className="lead text-muted">Welcome!, here you can find info related to any movie, just type a name and select the desired movie from the results displayed below.</p>
          <form className="input-group search-bar" onSubmit={this.onFormSubmit}>
            <input
              type="text"
              placeholder="Type a movie name and press enter or click on search..."
              className="form-control col-md-6"
              value={this.state.term}
              onChange={this.onInputChange} 
              required/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </div>
          </form>
          {this.renderSubTitle()}
        </div>
      </div>
      
    );
  }
}

// Mapping dispatch to props shortcut
function mapStateToProps({movies}) {
  return { 
    movies: movies.moviesData.results,
    isPopular: movies.isPopular
  };
}
export default connect(mapStateToProps, { searchMovie })(SearchBar);