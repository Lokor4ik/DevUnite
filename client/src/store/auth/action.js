import axios from 'axios';
import { message } from 'antd';
import setAuthToken from 'utils/setAuthToken';
import { CLEAR_PROFILE } from 'store/profile/types';
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

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      dispatch({ type: USER_LOADING_REQUEST });

      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      localStorage.removeItem('token');

      dispatch({
        type: AUTH_ERROR,
      });
    }
  } else {
    dispatch({
      type: MAIN_LOADED_SUCCESS,
    });
  }
};

export const registerUser = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    dispatch({ type: REGISTER_REQUEST });

    const res = await axios.post('/api/users', body, config);
    localStorage.setItem('token', res.data.token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach(element => {
        message.error(element.msg);
      });
    }

    localStorage.removeItem('token');

    dispatch({
      type: REGISTER_FAILURE,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    dispatch({ type: LOGIN_REQUEST });

    const res = await axios.post('/api/auth', body, config);
    localStorage.setItem('token', res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach(element => {
        message.error(element.msg);
      });
    }

    localStorage.removeItem('token');

    dispatch({
      type: LOGIN_FAILURE,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};

export const logoutUser = () => async dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
