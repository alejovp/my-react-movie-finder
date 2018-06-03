import { 
  FETCH_POP_MOVIES,
  FETCH_POP_MOVIES_OK,
  FETCH_POP_MOVIES_KO } from '../actions';

const defaultState = {
  isLoading: false,
  moviesData: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_POP_MOVIES:
      return { ...state, isLoading: true };

    case FETCH_POP_MOVIES_OK: {
      // const { results } = action.payload.response.data;
      console.log(action.payload.response);
      // return { dataSource: results.map(extractMainData), isLoading: false };
      break;
    }

    case FETCH_POP_MOVIES_KO:
      return { ...defaultState };

    default:
      return state;
  }
}