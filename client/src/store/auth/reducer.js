import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  MAIN_LOADED_SUCCESS,
  USER_LOADING_REQUEST,
  USER_LOADED_SUCCESS,
  AUTH_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case LOGOUT:
    case AUTH_ERROR:
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      }
    default:
      return state;
  }
};

export default reducer;