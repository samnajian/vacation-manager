import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import AddNewEmployee from '../containers/addNewEmployee';
import RequestVacation from '../containers/requestVacation';
import RequestsList from '../containers/requestsList';
import Header from './Header';
import Content from './Content';
import {Container} from './elements';

require('../../scss/style.scss');

const App = () => (
    <Fragment>
        <Container>
            <Header/>
        </Container>
        <Container>
            <Content>
                <Switch>
                    <Route path='/' exact component={AddNewEmployee}/>
                    <Route path='/request' component={RequestVacation}/>
                    <Route path='/requests' component={RequestsList}/>
                </Switch>
            </Content>
        </Container>
    </Fragment>
);

export default App;
