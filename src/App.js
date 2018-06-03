import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import MoviesList from './components/MoviesList';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <div className="App container">
          <MoviesList />
        </div>
      </Provider>
    );
  }
}

export default App;
