import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers';
import localStorage from './middlewares/localStorage';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(logger, localStorage)
);

export default store;