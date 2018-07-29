import {connect} from 'react-redux';
import Request from '../components/Request';
import IEmployee from '../reducers/employee/IEmployee';
import {actionAddRequest} from '../reducers/requestReducer';
import getRemainingVacationBudgetForEmployee, {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import IRequest from '../reducers/request/IRequest';

interface IDispatchProps {
    save: (request: IRequest) => {};
}

interface IStateProps {
    employees: IEmployee[];
    remainingBudgets: IRemainingVacationBudget[];
}

const mapStateToProps = (state): IStateProps => ({
    employees: state.employees.employees,
    remainingBudgets: state.employees.employees.map(getRemainingVacationBudgetForEmployee(state.requests.requests))
});

const matchDispatchToProps = (dispatch): IDispatchProps => ({
    save: (request: IRequest) => dispatch(actionAddRequest(request))
});

export default connect(mapStateToProps, matchDispatchToProps)(Request);
