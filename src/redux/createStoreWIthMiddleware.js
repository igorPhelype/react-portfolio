import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default createStoreWithMiddleware;