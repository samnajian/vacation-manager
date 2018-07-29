import IEmployee from "./employee/IEmployee";
import IEmployeesState from "./employee/IEmployeesState";

const initialState = {
    employees: []
} as IEmployeesState;

//actions
const ADD_EMPLOYEE = "@@VM/employee/ADD";

// action creators
export const actionAddEmployee = (employee: IEmployee): {
    type: string;
    payload: IEmployee
} => ({
    type: ADD_EMPLOYEE,
    payload: employee
});

// reducer
export default (state: IEmployeesState = initialState, action: { type: string; payload?: any; }) => {
    const handler = {
        ADD_EMPLOYEE: () => ({...state, employees: [state.employees, ...action.payload]})
    }[action.type];
    return handler ? handler() : state;
};
