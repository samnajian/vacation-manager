import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import AddNewEmployee from '../containers/addNewEmployee';
import RequestVacation from '../containers/requestVacation';
import RequestsList from '../containers/requestsList';
import Header from './Header';
import Content from './Content';

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
