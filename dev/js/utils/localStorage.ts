import IEmployeesState from '../reducers/employee/IEmployeesState';
import IRequestState from '../reducers/request/IRequestState';
import IState from '../reducers/state/IState';

//constants
export const STORE_KEY = '@@VM/State';

//private functions
const getStoredData = (): IState => JSON.parse((localStorage.getItem(STORE_KEY) || '{}'));

//exported functions
export const getEmployees = (): IEmployeesState => getStoredData().employees || {employees: []} as IEmployeesState;
export const getRequests = (): IRequestState => getStoredData().requests || {requests: []} as IRequestState;
