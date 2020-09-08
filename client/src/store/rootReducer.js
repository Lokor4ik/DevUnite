
import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  auth: auth.reducer,
  profile: profile.reducer,
});