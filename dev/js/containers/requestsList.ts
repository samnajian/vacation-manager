import {connect} from 'react-redux';
import Requests from '../components/Requests';
import IEmployee from '../reducers/employee/IEmployee';
import IRequest from '../reducers/request/IRequest';
import getRemainingVacationBudgetForEmployee, {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import {actionApproveRequest, actionRejectRequest} from '../reducers/requestReducer';

interface IStateProps {
    openRequests: IRequest[];
    employees: IEmployee[];
    remainingBudgets: IRemainingVacationBudget[];
}

const mapStateToProps = (state): IStateProps => ({
    openRequests: state.requests.requests.filter((request: IRequest) => request.status !== false),
    employees: state.employees.employees,
    remainingBudgets: state.employees.employees.map(getRemainingVacationBudgetForEmployee(state.requests.requests))
});

interface IDispatchProps {
    approve: (request: IRequest) => {};
    reject: (request: IRequest) => {};
}

const matchDispatchToProps = (dispatch): IDispatchProps => ({
    approve: (request: IRequest) => dispatch(actionApproveRequest(request.id)),
    reject: (request: IRequest) => dispatch(actionRejectRequest(request.id)),
});

export default connect(mapStateToProps, matchDispatchToProps)(Requests);
