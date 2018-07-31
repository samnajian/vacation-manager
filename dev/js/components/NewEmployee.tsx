import React, {StatelessComponent} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Input, Label, Row} from './elements';
import moment, {Moment} from 'moment';
import FormHOC from './HOC/FormHOC';

interface INewEmployeeInnerFormProps {
    onInputChange: (e) => void;
    setFormState: (key: string, value: any) => void;
    birthDate: number;
    firstName: string;
    lastName: string;
    vacationEntitlement: string;
}

const NewEmployeeInnerForm: StatelessComponent<INewEmployeeInnerFormProps> = ({
                                                                                  onInputChange,
                                                                                  firstName,
                                                                                  lastName,
                                                                                  birthDate,
                                                                                  vacationEntitlement,
                                                                                  setFormState
                                                                              }) => (<>
    <Row>
        <Label htmlFor='employeeFirstName'>
            First Name:
        </Label>
        <Input required={true} autoComplete={'given-name'} type='text' id='employeeFirstName'
               name='firstName'
               onChange={onInputChange} value={firstName}/>
    </Row>
    <Row>
        <Label htmlFor='employeeLastName'>
            Last Name:
        </Label>
        <Input required={true} type='text' autoComplete={'family-name'} id='employeeLastName'
               name='lastName'
               onChange={onInputChange} value={lastName}/>
    </Row>
    <Row>
        <Label htmlFor='employeeBirthDate'>
            Birth date:
        </Label>
        <DatePickerInput required={true} selected={birthDate ? moment.unix(birthDate) : null}
                         onChange={(date: Moment) => setFormState('birthDate', date.unix())}
        />
    </Row>
    <Row>
        <Label htmlFor='employeeVacationEntitlement'>
            Vacation Entitlement:
        </Label>
        <Input required={true} type='number' id='employeeVacationEntitlement' name='vacationEntitlement'
               onChange={onInputChange} min='0' value={vacationEntitlement}/>
    </Row>
    <Row>
        <Button type='submit' primary={true}>Save</Button>
    </Row>
</>);

NewEmployeeInnerForm.displayName = 'NewEmployeeInnerForm';

NewEmployeeInnerForm.defaultProps = {
    onInputChange: (e) => {},
    setFormState: (key: string, value: any) => {},
    birthDate: null,
    firstName: "",
    lastName: "",
    vacationEntitlement: "",
};

NewEmployeeInnerForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    birthDate: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    vacationEntitlement: PropTypes.string
};

export default FormHOC(NewEmployeeInnerForm);
