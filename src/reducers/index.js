import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import DetailReducer from './detail';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  detail: DetailReducer
});

export default rootReducer;