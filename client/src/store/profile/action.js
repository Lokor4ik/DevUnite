import axios from 'axios';
import { message } from 'antd';
import setAuthToken from 'utils/setAuthToken';
import { capitalizeFirstLetter } from 'utils/stringHelper';
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from './types';

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
};

export const createUpdateProfile = (formData, pathUrl, hasTypeProfile, method = 'post') => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({
      type: hasTypeProfile
        ? UPDATE_PROFILE_REQUEST
        : CREATE_PROFILE_REQUEST,
    });

    const nameType = pathUrl.trim() ? capitalizeFirstLetter(pathUrl.slice(1)) : 'Profile';

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios[method](`/api/profile${pathUrl}`, formData, config);

    dispatch({
      type: hasTypeProfile
        ? UPDATE_PROFILE_SUCCESS
        : CREATE_PROFILE_SUCCESS,
      payload: res.data,
    });

    message.success(hasTypeProfile ? `${nameType} Updated` : `${nameType} Created`);
  } catch (error) {
    const { errors } = error.response.data;

    if (errors) {
      errors.forEach(element => {
        message.error(element.msg);
      });
    }

    dispatch({
      type: hasTypeProfile
        ? UPDATE_PROFILE_ERROR
        : CREATE_PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};
