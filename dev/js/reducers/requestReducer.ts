const initialState = {
    requests: []
};

//actions
const ADD_REQUEST = '@@VM/request/ADD';

// action creators
export const actionAddRequest = (employeeData) => ({
    type:    ADD_REQUEST,
    payload: employeeData
});

// reducer
export default (state = initialState, action) => {
    const handler = {
        ADD_REQUEST: () => ({...state, requests: [state.requests, ...action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
