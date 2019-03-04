import { combineReducers } from 'redux';
import app from './app-reducer';
import accounts from './accounts-reducer';

export default combineReducers(
  { app, accounts }
);
