import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Reducers
import rootReducer from './reducers';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Error from './components/Error';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/detail/:id" component={MovieDetail} />
              <Route exact path="/" component={MoviesList} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
