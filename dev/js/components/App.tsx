import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import AddNewEmployee from "../containers/add-new-employee";
import RequestVacation from "../containers/request-vacation";
import RequestsList from "../containers/requests-list";
import Header from "./Header";
import Content from "./Content";

require('../../scss/style.scss');

const App = () => (
    <Fragment>
        <Header>Header</Header>
        <Content>
            <Switch>
                <Route path='/' exact component={AddNewEmployee}/>
                <Route path='/request' component={RequestVacation}/>
                <Route path='/requests' component={RequestsList}/>
            </Switch>
        </Content>
    </Fragment>
);

export default App;
