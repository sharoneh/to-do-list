import { createStore, applyMiddleware } from 'redux';
import AppReducer from './AppReducer';
import logger from 'redux-logger';

export default createStore(AppReducer, applyMiddleware(logger))