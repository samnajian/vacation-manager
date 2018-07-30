import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Label, Row} from './elements';
import FormHOC from './HOC/FormHOC';
import IEmployee from '../reducers/employee/IEmployee';
import {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import moment, {Moment} from 'moment';
import EmployeesDropdown from './EmployeesDropdown';

interface IRequestProps {
    employees: IEmployee[];
    remainingBudgets: IRemainingVacationBudget[];
    onInputChange: (e) => {};
    setFormState: (key: string, value: any) => {};
    fromDate: number;
    toDate: number;
    employeeId: number;
}

interface IRequestState {
    selectedEmployeeId: number;
}

class Request extends Component<IRequestProps, IRequestState> {
    state = {
        selectedEmployeeId: -1,
    };

    static defaultProps = {
        employees: [],
        remainingBudgets: [],
        onInputChange: (e) => {},
        setFormState: (key: string, value: any) => {}
    };

    static propTypes = {
        employees: PropTypes.array.isRequired,
        remainingBudgets: PropTypes.array.isRequired,
        onInputChange: PropTypes.func.isRequired,
    };

    private onNameChange = (e) => {
        const selectedEmployeeId = e.target.value;
        this.setState(state => ({...state, selectedEmployeeId}));
        if (selectedEmployeeId > 0) {
            this.props.setFormState('employeeId', selectedEmployeeId);
        }
    };

    private getRemainingBudget = (): number => {
        if (this.state.selectedEmployeeId == -1) {
            return 0;
        }

        return this.props.remainingBudgets.find(
            (budget: IRemainingVacationBudget) => budget.employeeId == this.state.selectedEmployeeId
        ).remainingBudget
    };

    private onDateChange = (key: string) => (date: Moment) => {
        this.props.setFormState(key, date.unix());
    };

    render() {
        const {employees, fromDate, toDate, employeeId} = this.props;
        return (<>
            <Row>
                <Label htmlFor='requestName'>
                    Name:
                </Label>
                <EmployeesDropdown
                    onChange={this.onNameChange}
                    employees={employees}
                    required={true}
                    noSelectOption="Select your name"
                    selected={`${employeeId}`}
                />
            </Row>
            <Row>
                <Label>
                    Vacation budget left: {this.getRemainingBudget()}
                </Label>
            </Row>
            <Row>
                <Label htmlFor='requestFrom'>
                    From:
                </Label>

                <DatePickerInput required={true}
                                 id='requestFrom'
                                 selected={fromDate ? moment.unix(fromDate) : null}
                                 name='fromDate'
                                 onChange={this.onDateChange('fromDate')}
                                 minDate={moment()}
                />
                <Label htmlFor='requestTo'>
                    To:
                </Label>
                <DatePickerInput required={true}
                                 id='requestTo' name='toDate'
                                 selected={toDate ? moment.unix(toDate) : null}
                                 onChange={this.onDateChange('toDate')}
                                 minDate={fromDate ? moment.unix(fromDate) : null}
                />
            </Row>
            <Row>
                <Button type='submit' primary={true}>Save</Button>
            </Row>
        </>)
    }
}

export default FormHOC(Request);