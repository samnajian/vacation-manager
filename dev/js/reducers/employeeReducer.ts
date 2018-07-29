import IEmployee from './employee/IEmployee';
import IEmployeesState from './employee/IEmployeesState';
import {getEmployees} from '../utils/localStorage';

const initialState = getEmployees();

//actions
const ADD = '@@VM/employee/ADD';

// action creators
export const actionAddEmployee = (employee: IEmployee): {
    type: string;
    payload: IEmployee;
} => ({
    type: ADD,
    payload: employee
});

// reducer
export default (state: IEmployeesState = initialState, action: { type: string; payload?: any; }) => {
    const handler = {
        [ADD]: () => ({...state, employees: [...state.employees, {...action.payload, id: new Date().getTime()}]})
    }[action.type];
    return handler ? handler() : state;
};
