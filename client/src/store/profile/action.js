import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
} from './types';

import { message } from 'antd';

export const getCurrentProfile = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({ type: GET_PROFILE_REQUEST });

    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
}

export const createProfile = (formData, hasProfile) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({ type: CREATE_PROFILE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: CREATE_PROFILE_SUCCESS,
      payload: res.data,
    });

    message.success(hasProfile ? 'Profile Updated' : 'Profile Created');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(element => {
        message.error(element.msg);
      });
    }

    dispatch({
      type: CREATE_PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
}