
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({
  alert: alert.reducer,
  auth: auth.reducer,
});