import { combineReducers } from 'redux';

import newsReducer from './news';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  newsReducer,
  authReducer,
  userReducer,
});
export default rootReducer;
