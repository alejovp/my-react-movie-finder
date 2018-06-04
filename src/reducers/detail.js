import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_OK,
  FETCH_MOVIE_DETAIL_KO
} from '../actions';

const defaultState = {
  isLoading: false,
  detailData: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return { ...state, isLoading: true };

    case FETCH_MOVIE_DETAIL_OK:
      const movieDetail = action.payload.data;

      return { detailData: movieDetail, isLoading: false };

    case FETCH_MOVIE_DETAIL_KO:
      return { ...defaultState };

    default:
      return state;
  }
}