import { 
  FETCH_POP_MOVIES,
  FETCH_POP_MOVIES_OK,
  FETCH_POP_MOVIES_KO,
  SEARCH_MOVIE,
  SEARCH_MOVIE_OK,
  SEARCH_MOVIE_KO
 } from '../actions';

const defaultState = {
  isLoading: false,
  moviesData: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_POP_MOVIES:
      return { ...state, isLoading: true };

    case SEARCH_MOVIE:
      return { ...state, isLoading: true };
    
    case FETCH_POP_MOVIES_OK: 
      const popMovies = action.payload.data.results;
      
      return { moviesData: popMovies, isLoading: false };
    
    case SEARCH_MOVIE_OK: 
      const movieResult = action.payload.data.results;
      
      return { moviesData: movieResult, isLoading: false };

    case FETCH_POP_MOVIES_KO:
      return { ...defaultState };
    
    case SEARCH_MOVIE_KO:
      return { ...defaultState };

    default:
      return state;
  }
}