import React, {Fragment} from "react";
import UserList from "../containers/user-list";
import UserDetails from "../containers/user-detail";
require('../../scss/style.scss');

const App = () => (
    <Fragment>
            <h2>User List</h2>
            <UserList />
            <hr />
            <h2>User Details</h2>
            <UserDetails />
    </Fragment>
);

export default App;
