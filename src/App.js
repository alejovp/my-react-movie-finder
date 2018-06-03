import React, { Component } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
