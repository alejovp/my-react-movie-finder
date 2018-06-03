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
      console.log(action.payload.data);
      // const { results } = action.payload.response.data;
      
      // return { dataSource: results.map(extractMainData), isLoading: false };

      return null;
    }

    case FETCH_POP_MOVIES_KO:
      return { ...defaultState };

    default:
      return state;
  }
}