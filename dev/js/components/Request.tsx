import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Label, Row} from './elements';
import FormHOC from './HOC/FormHOC';
import IEmployee from '../reducers/employee/IEmployee';
import {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import moment, {Moment} from 'moment';

interface IRequestProps {
    employees: IEmployee[];
    remainingBudgets: IRemainingVacationBudget[];
    onInputChange: (e) => {};
}

interface IRequestState {
    selectedEmployeeId: number;
    fromDate: number,
    toDate: number,
}

class Request extends Component<IRequestProps, IRequestState> {
    state = {
        selectedEmployeeId: -1,
        fromDate: null,
        toDate: null
    };

    static defaultProps = {
        employees: [],
        remainingBudgets: [],
        onInputChange: () => {
        }
    };

    static propTypes = {
        employees: PropTypes.array.isRequired,
        remainingBudgets: PropTypes.array.isRequired,
        onInputChange: PropTypes.func.isRequired,
    };

    private onNameChange = (e) => {
        const selectedId = e.target.value;
        this.setState(state => ({...state, selectedEmployeeId: selectedId}));
        this.props.onInputChange(e);
    };

    private getRemainingBudget = (): number => {
        if (this.state.selectedEmployeeId === -1) {
            return 0;
        }

        return this.props.remainingBudgets.find(
            (budget: IRemainingVacationBudget) => budget.employeeId == this.state.selectedEmployeeId
        ).remainingBudget
    };

    private onDateChange = (key: string) => (date: Moment) => this.setState(state => ({...state, [key]: date}));

    render() {
        const {employees, onInputChange} = this.props;
        return (<>
            <Row>
                <Label htmlFor='requestName'>
                    Requester name:
                </Label>
                <select id='requestName' name='request[name]' onChange={this.onNameChange}>
                    <option value="-1">Select your name</option>
                    {employees.map((employee: IEmployee) =>
                        <option key={employee.id}
                                value={employee.id}>{employee.firstName}&nbsp;{employee.lastName}</option>)}
                </select>
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

                <DatePickerInput id='requestFrom' selected={this.state.fromDate} name='fromDate'
                                 onChange={this.onDateChange('fromDate')}
                                 onChangeRaw={onInputChange}
                                 minDate={moment()}/>
                <Label htmlFor='requestTo'>
                    To:
                </Label>
                <DatePickerInput id='requestTo' name='toDate' selected={this.state.toDate}
                                 onChange={this.onDateChange('toDate')}
                                 onChangeRaw={onInputChange}
                                 minDate={this.state.fromDate}
                />
            </Row>
            <Row>
                <Button type='submit' primary={true}>Save</Button>
            </Row>
        </>)
    }
}

export default FormHOC(Request);