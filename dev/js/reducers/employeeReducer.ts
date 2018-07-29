import IEmployee from './employee/IEmployee';
import IEmployeesState from './employee/IEmployeesState';

const initialState = {
    employees: []
} as IEmployeesState;

//actions
const ADD = '@@VM/employee/ADD';

// action creators
export const actionAddEmployee = (employee: IEmployee): {
    type: string;
    payload: IEmployee
} => ({
    type: ADD,
    payload: employee
});

// reducer
export default (state: IEmployeesState = initialState, action: { type: string; payload?: any; }) => {
    const handler = {
        ADD: () => ({...state, employees: [state.employees, ...action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
