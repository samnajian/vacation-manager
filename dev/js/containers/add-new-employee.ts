import {connect} from "react-redux";
import NewEmployee from "../components/NewEmployee";
import {actionAddEmployee} from "../reducers/employeeReducer";
import IEmployee from "../reducers/employee/IEmployee";

interface IDispatchProps {
    save: (employee: IEmployee) => {};
}

const matchDispatchToProps = (dispatch): IDispatchProps => ({
    save: (employee: IEmployee) => dispatch(actionAddEmployee(employee))
});

const mapStateToProps = () => ({});
export default connect(mapStateToProps, matchDispatchToProps)(NewEmployee);
