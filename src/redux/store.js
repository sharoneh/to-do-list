import { createStore, applyMiddleware } from 'redux';
import AppReducer from './AppReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { mainSaga } from './sagas';

const saga = createSagaMiddleware()

export default createStore(AppReducer, applyMiddleware(saga, logger))

saga.run(mainSaga)