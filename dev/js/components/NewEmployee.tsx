import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Input, Label, Row} from './elements';

import FormHOC from './HOC/FormHOC';
import {Moment} from 'moment';

interface INewEmployeeInnerFormProps {
    onInputChange: (e) => {},
    setFormState: (key: string, value: any) => {}
}

interface INewEmployeeInnerFormState {
    birthDate: Moment
}

class NewEmployeeInnerForm extends Component<INewEmployeeInnerFormProps, INewEmployeeInnerFormState> {

    state = {
        birthDate: null
    };

    static defaultProps = {
        onInputChange: (e) => {},
        setFormDate: (key: string, value: any) => {}
    };

    static propTypes = {
        onInputChange: PropTypes.func.isRequired,
        setFormDate: PropTypes.func.isRequired,
    };

    private onBirthDateChange = (date: Moment) => {
        this.setState(state => ({...this.state, birthDate: date}));
        this.props.setFormState('birthDate', date.unix())
    };

    render() {
        const {onInputChange} = this.props;
        return (<>
            <Row>
                <Label htmlFor='employeeFirstName'>
                    First Name:
                </Label>
                <Input autoComplete={'given-name'} type='text' id='employeeFirstName' name='firstName'
                       onChange={onInputChange}/>
            </Row>
            <Row>
                <Label htmlFor='employeeLastName'>
                    Last Name:
                </Label>
                <Input type='text' autoComplete={'family-name'} id='employeeLastName' name='lastName'
                       onChange={onInputChange}/>
            </Row>
            <Row>
                <Label htmlFor='employeeBirthdate'>
                    Birth date:
                </Label>
                <DatePickerInput selected={this.state.birthDate} onChange={this.onBirthDateChange}
                />
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
    }
};

export default FormHOC(NewEmployeeInnerForm);
