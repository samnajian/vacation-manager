import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

const UserDetail = ({user}) => !user
    ? (<div>Select a user...</div>)
    : (<Fragment>
        <img src={user.thumbnail}/>
        <h2>{user.first} {user.last}</h2>
        <h3>Age: {user.age}</h3>
        <h3>Description: {user.description}</h3>
    </Fragment>);

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
