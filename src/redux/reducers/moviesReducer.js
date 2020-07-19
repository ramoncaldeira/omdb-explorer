import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actions/moviesActions';

const initialState = {
  loading: false,
  error: false,
  data: {},
};

export default function reducer(state = initialState, { type, data, error }) {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, data };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error };
    default:
      return state;
  }
}
