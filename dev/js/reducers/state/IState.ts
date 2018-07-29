import IEmployeesState from '../employee/IEmployeesState';
import IRequestState from '../request/IRequestState';

interface IState {
    employees: IEmployeesState;
    requests: IRequestState;
}

export default IState;