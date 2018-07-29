import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import localStorage from './middlewares/localStorage';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger, localStorage)
);

export default store;