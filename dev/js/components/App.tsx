import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddNewEmployee from '../containers/addNewEmployee';
import RequestVacation from '../containers/requestVacation';
import RequestsList from '../containers/requestsList';
import Header from './Header';
import {Container} from './elements';
import WithTitle from './HOC/WithTitle';

require('../../scss/style.scss');

const App = () => (
    <>
        <Container>
            <Header/>
        </Container>
        <Container>
            <Switch>
                <Route path='/' exact component={WithTitle('Add New Employee')(AddNewEmployee)}/>
                <Route path='/request' component={WithTitle('Request Vacation')(RequestVacation)}/>
                <Route path='/requests' component={WithTitle('Vacation Requests')(RequestsList)}/>
            </Switch>
        </Container>
    </>
);

export default App;
