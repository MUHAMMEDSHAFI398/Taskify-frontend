import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/login';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers here if you have additional features
});

export default rootReducer;