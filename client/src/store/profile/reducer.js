import {
  PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from './types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        profiles: [],
        repos: [],
        loading: false,
        error: {},
      }
    default:
      return state;
  }
};

export default reducer;