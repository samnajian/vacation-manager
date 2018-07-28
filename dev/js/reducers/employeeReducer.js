const initialState = {
    employees: []
};
//actions
const ADD_EMPLOYEE = "@@VM/employee/ADD";

// action creators
export const actionAddEmployee = (employeeData) => ({
    type:    ADD_EMPLOYEE,
    payload: employeeData
});

// reducer
export default (state = initialState, action) => {
    const handler = {
        ADD_EMPLOYEE: () => ({...state, employees: [state.employees, ...action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
