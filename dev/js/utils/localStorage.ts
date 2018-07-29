import IEmployeesState from '../reducers/employee/IEmployeesState';
import IRequestState from '../reducers/request/IRequestState';
import IState from '../reducers/state/IState';

export const STORE_KEY = '@@VM/State';

const getStoredData = (): IState => JSON.parse((localStorage.getItem(STORE_KEY) || '{}'));

export const getEmployees = (): IEmployeesState => getStoredData()['employees'] || {} as IEmployeesState;
export const getRequests = (): IRequestState => getStoredData()['requests'] || {} as IRequestState;
