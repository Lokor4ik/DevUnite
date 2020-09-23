import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import {
  PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  PROFILE_ERROR,
} from './types';

export const getCurrentProfile = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({ type: PROFILE_REQUEST });

    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
}