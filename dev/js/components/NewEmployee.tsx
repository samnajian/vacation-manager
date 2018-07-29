import React from 'react';
import {Button, Input, Label, Row} from './elements';

import FormHOC from './HOC/FormHOC';

const NewEmployeeInnerForm = ({onInputChange}) => (<>
    <Row>
        <Label htmlFor='employeeFirstName'>
            First Name:
        </Label>
        <Input type='text' id='employeeFirstName' name='firstName' onChange={onInputChange}/>
    </Row>
    <Row>
        <Label htmlFor='employeeLastName'>
            Last Name:
        </Label>
        <Input type='text' id='employeeLastName' name='lastName' onChange={onInputChange}/>
    </Row>
    <Row>
        <Label htmlFor='employeeBirthdate'>
            Birth date:
        </Label>
        <Input type='text' id='employeeBirthdate' name='birthDate' onChange={onInputChange}/>
    </Row>
    <Row>
        <Label htmlFor='employeeVacationEntitlement'>
            Vacation Entitlement:
        </Label>
        <Input type='number' id='employeeVacationEntitlement' name='vacationEntitlement'
               onChange={onInputChange} min='0'/>
    </Row>
    <Row>
        <Button type='submit' primary={true}>Save</Button>
    </Row>
</>);

export default FormHOC(NewEmployeeInnerForm);
