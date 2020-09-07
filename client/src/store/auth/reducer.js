import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  MAIN_LOADED,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_LOADED:
      return {
        ...state,
        loading: false,
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case LOGOUT:
    case AUTH_ERROR:
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state;
  }
};

export default reducer;