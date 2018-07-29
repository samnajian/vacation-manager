import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import Row from './elements/Row';
import Button from './elements/Button';
import Input from './elements/Input';
import Label from './elements/Label';
import IEmployee from '../reducers/employee/IEmployee';

interface INewEmpyloeeFormProps {
    save: (employee: IEmployee) => {}
}

interface INewEmployeeState {
    employee: IEmployee;
}

class NewEmployee extends Component<INewEmpyloeeFormProps, INewEmployeeState> {

    state: INewEmployeeState = {
        employee: {} as IEmployee
    };

    static propTypes = {
        save: PropTypes.func.isRequired
    };

    static defaultProps = {};

    private validate = (employee: IEmployee) => {
        return true;
    };

    private handleSubmit = e => {
        e.preventDefault();
        if (this.validate(this.state.employee)) {
            this.props.save(this.state.employee);
        }
    };

    private onInputChange = e => {
        const key = e.currentTarget.name;
        const value = e.target.value;
        this.setState(state =>
            ({
                ...state,
                employee: {...state.employee, [key]: value}
            })
        )
    };

    render() {
        return (
            <Row>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <Label htmlFor='employeeFirstName'>
                            First Name
                        </Label>
                        <Input type='text' id='employeeFirstName' name='employee[firstName]'
                               onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <Label htmlFor='employeeLastName'>
                            Last Name
                        </Label>
                        <Input type='text' id='employeeLastName' name='employee[lastName]'
                               onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <Label htmlFor='employeeVacationEntitlement'>
                            Allowed vacations:
                        </Label>
                        <Input type='number' id='employeeVacationEntitlement' name='employee[vacationEntitlement]'
                               onChange={this.onInputChange} min='0'/>
                    </div>
                    <div>
                        <Button type='submit' primary={true}>Save</Button>
                    </div>
                </form>
            </Row>
        );
    }
}

export default NewEmployee;