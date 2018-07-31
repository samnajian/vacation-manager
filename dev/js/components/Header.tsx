import React, {StatelessComponent} from 'react';
import {H2, Col, StyledNavLink} from './elements';
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar';

const Header: StatelessComponent = () => <Col>
    <header className='header'>
        <H2>
            Vacation Management
        </H2>
        <Navbar>
            <StyledNavLink exact={true} to='/'>Home</StyledNavLink>
            <StyledNavLink to='/request'>Request Vacation</StyledNavLink>
            <StyledNavLink to='/requests'>Vacation Requests</StyledNavLink>
        </Navbar>
    </header>
</Col>;

Header.displayName = 'Header';
export default Header;