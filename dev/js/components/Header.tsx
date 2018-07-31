import React, {StatelessComponent} from 'react';
import {H2, Row} from './elements';

const Header: StatelessComponent = () => <Row>
    <header className='header'>
        <H2>
            Vacation Management
        </H2>
    </header>
</Row>;

Header.displayName = 'Header';
export default Header;