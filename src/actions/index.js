import axios from 'axios';
import Constants from '../constants';

export const FETCH_POP_MOVIES = 'fetch_pop_movies';
export const FETCH_POP_MOVIES_OK = 'fetch_pop_movies_ok';
export const FETCH_POP_MOVIES_KO = 'fetch_pop_movies_ko';

const { API_KEY } = Constants;
const API_BASE_URL = `https://api.themoviedb.org/3/movie`;

export function fetchPopularMovies() {
  const url = `${API_BASE_URL}/popular?api_key=${API_KEY}`;

  // Redux Thunk will inject dispatch here:
  return dispatch => {
    // Reducers may handle this to set a flag like isFetching
    dispatch({ type: FETCH_POP_MOVIES })

    // Perform the actual API call
    return axios.get(url).then(
      response => {
        // Reducers may handle this to show the data and reset isFetching
        dispatch({ type: FETCH_POP_MOVIES_OK, payload: response })
      },
      error => {
        // Reducers may handle this to reset isFetching
        dispatch({ type: FETCH_POP_MOVIES_KO, payload: error })
        // Rethrow so returned Promise is rejected
        throw error
      }
    )
  }

}