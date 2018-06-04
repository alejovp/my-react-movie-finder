import axios from 'axios';
import Constants from '../constants';

// Popular movies types
export const FETCH_POP_MOVIES = 'fetch_pop_movies';
export const FETCH_POP_MOVIES_OK = 'fetch_pop_movies_ok';
export const FETCH_POP_MOVIES_KO = 'fetch_pop_movies_ko';

// Search movie types
export const SEARCH_MOVIE = 'search_movie';
export const SEARCH_MOVIE_OK = 'search_movie_ok';
export const SEARCH_MOVIE_KO = 'search_movie_ko';

const { API_KEY } = Constants;
const API_BASE_URL = `https://api.themoviedb.org/3`;

export function fetchPopularMovies() {
  const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`;

  return thunkRequest(
    FETCH_POP_MOVIES,
    FETCH_POP_MOVIES_OK,
    FETCH_POP_MOVIES_KO,
    url
  );
}

export function searchMovie(term) {
  const url = `${API_BASE_URL}/search/movie?query=${term}&api_key=${API_KEY}`;

  return thunkRequest(
    SEARCH_MOVIE,
    SEARCH_MOVIE_OK,
    SEARCH_MOVIE_KO,
    url
  );
}

function thunkRequest(type, typeOk, typeKo, url) {
  // Redux Thunk will inject dispatch here:
  return dispatch => {
    // Reducers may handle this to set a flag like isFetching
    dispatch({ type });

    // Perform the actual API call
    return axios.get(url).then(
      response => {
        console.log(response)
        // Reducers may handle this to show the data and reset isFetching
        dispatch({ type: typeOk, payload: response });
      },
      error => {
        // Reducers may handle this to reset isFetching
        dispatch({ type: typeKo, payload: error });
        // Rethrow so returned Promise is rejected
        throw error;
      }
    )
  }
}