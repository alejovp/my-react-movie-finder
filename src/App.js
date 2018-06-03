import React, { Component } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <MoviesList />
      </div>
    );
  }
}

export default App;
