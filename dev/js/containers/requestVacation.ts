import {connect} from 'react-redux';
import Request from '../components/Request';
import IEmployee from '../reducers/employee/IEmployee';
import {actionAddRequest} from '../reducers/requestReducer';
import getRemainingVacationBudgetForEmployee from '../utils/getRemainingVacationBudgetForEmployee';

const mapStateToProps = (state) => ({
    employees: state.employees.employees,
    remainingBudgets: state.employees.employees.map(getRemainingVacationBudgetForEmployee(state.requests.requests))
});

interface IDispatchProps {
    save: (employee: IEmployee) => {};
}

const matchDispatchToProps = (dispatch): IDispatchProps => ({
    save: (employee: IEmployee) => dispatch(actionAddRequest(employee))
});

export default connect(mapStateToProps, matchDispatchToProps)(Request);
