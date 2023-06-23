import { combineReducers } from 'redux';

import { userReducer } from './User/reducer';


export const rooReducer = combineReducers({
  user: userReducer,
});

