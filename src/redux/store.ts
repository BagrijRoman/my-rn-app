import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import type {} from 'redux-thunk/extend-redux';

import { rooReducer } from './rootReducer';

export const store = createStore(rooReducer, applyMiddleware(thunk));

export type TDispatch = typeof store.dispatch
