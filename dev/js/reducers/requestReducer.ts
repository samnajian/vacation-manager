import {getRequests} from '../utils/localStorage';
import IRequestState from './request/IRequestState';

const initialState = getRequests();

//actions
const ADD = '@@VM/request/ADD';

// action creators
export const actionAddRequest = (employeeData) => ({
    type: ADD,
    payload: employeeData
});

// reducer
export default (state: IRequestState = initialState, action) => {
    const handler = {
        [ADD]: () => ({...state, requests: [...state.requests, action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
