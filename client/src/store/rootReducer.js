
import { combineReducers } from 'redux';
import alert from './alert';
import registerUser from './auth';

export default combineReducers({
  alert: alert.reducer,
  registerUser: registerUser.reducer,
});