import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import NewEmployee from "../components/NewEmployee";
import {actionAddEmployee} from "../reducers/employeeReducer";

const matchDispatchToProps = (dispatch) => ({
    save: (values) => dispatch(actionAddEmployee(values))
});

const mapStateToProps = () => ({});
export default connect(mapStateToProps, matchDispatchToProps)(NewEmployee);
