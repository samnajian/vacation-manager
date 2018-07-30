import {getRequests} from '../utils/localStorage';
import IRequestState from './request/IRequestState';
import IRequest from './request/IRequest';

const initialState = getRequests();

//actions
const ADD = '@@VM/request/ADD';
const REJECT = '@@VM/request/REJECT';
const APPROVE = '@@VM/request/APPROVE';

// action creators
interface IAddAction {
    type: string;
    payload: IRequest;
}

export const actionAddRequest = (request: IRequest): IAddAction => ({
    type: ADD,
    payload: request
});

interface IRejectAction {
    type: string;
    payload: number;
}


interface IApproveAction {
    type: string;
    payload: number;
}


export const actionRejectRequest = (requestId: number): IRejectAction => ({
    type: REJECT,
    payload: requestId
});

export const actionApproveRequest = (requestId: number): IApproveAction => ({
    type: APPROVE,
    payload: requestId
});

// functions
const updateRequestStatus = (requestId: number, newStatus, requests) => requests.map((request: IRequest) => {
    if (request.id == requestId) {
        return {...request, status: newStatus}
    }
    return request;
});

// reducer
export default (state: IRequestState = initialState, action) => {
    const handler = {
        [ADD]: () => ({
            ...state, requests: [
                ...state.requests, {
                    ...action.payload,
                    id: new Date().getTime(),
                    status: null
                }]
        }),
        [REJECT]: () => ({
            ...state, requests: updateRequestStatus(action.payload, false, state.requests)
        }),
        [APPROVE]: () => ({
            ...state, requests: updateRequestStatus(action.payload, true, state.requests)
        })
    }[action.type];
    return handler ? handler() : state;
};
