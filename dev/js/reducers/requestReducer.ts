import {getRequests} from '../utils/localStorage';
import IRequestState from './request/IRequestState';
import IRequest from './request/IRequest';

const initialState = getRequests();

//actions
const ADD = '@@VM/request/ADD';

// action creators
interface IAddAction {
    type: string;
    payload: IRequest;
}

export const actionAddRequest = (request: IRequest): IAddAction => ({
    type: ADD,
    payload: request
});


// reducer
export default (state: IRequestState = initialState, action) => {
    const handler = {
        [ADD]: () => ({...state, requests: [...state.requests, action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
