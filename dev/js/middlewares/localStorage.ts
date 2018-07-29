import {STORE_KEY} from '../utils/localStorage';

export default store => next => action => {
    const nextState = next(action);
    localStorage.setItem(STORE_KEY, JSON.stringify(store.getState()));
    return nextState;
};