import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Input, Label, Row} from './elements';
import moment, {Moment} from 'moment';
import FormHOC from './HOC/FormHOC';

interface INewEmployeeInnerFormProps {
    onInputChange: (e) => {};
    setFormState: (key: string, value: any) => {};
    birthDate: number;
    firstName: string;
    lastName: string;
    vacationEntitlement: number;
}

interface INewEmployeeInnerFormState {

}

class NewEmployeeInnerForm extends Component<INewEmployeeInnerFormProps, INewEmployeeInnerFormState> {

    state = {};

    static defaultProps = {
        onInputChange: (e) => {},
        setFormDate: (key: string, value: any) => {},
        birthDate: null,
        firstName: "",
        lastName: "",
        vacationEntitlement: 0,
    };

    static propTypes = {
        onInputChange: PropTypes.func.isRequired,
        setFormDate: PropTypes.func.isRequired,
    };

    private onBirthDateChange = (date: Moment) => {
        this.props.setFormState('birthDate', date.unix())
    };

    render() {
        const {onInputChange, firstName, lastName, birthDate, vacationEntitlement} = this.props;
        return (<>
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
                                 onChange={this.onBirthDateChange}
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
    }
};

export default FormHOC(NewEmployeeInnerForm);
