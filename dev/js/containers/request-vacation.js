import React, {Component} from "react";
import {connect} from "react-redux";
import Request from "../components/Request";

const mapStateToProps = (state) => ({
    users: state.users
});

const matchDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, matchDispatchToProps)(Request);
