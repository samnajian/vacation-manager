import React, {StatelessComponent} from 'react';
import PropTypes from 'react-proptypes';
import {Button, DatePickerInput, Label, Row, Col} from './elements';
import FormHOC from './HOC/FormHOC';
import IEmployee from '../reducers/employee/IEmployee';
import {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import moment, {Moment} from 'moment';
import EmployeesDropdown from './EmployeesDropdown';
import getRemainingVacationBudget from '../utils/getRemainingVacationBudget';

interface IRequestProps {
    employees: IEmployee[];
    remainingBudgets: IRemainingVacationBudget[];
    onInputChange: (e) => void;
    setFormState: (key: string, value: any) => void;
    fromDate: number;
    toDate: number;
    employeeId: string;
}

const RequestInnerForm: StatelessComponent<IRequestProps> = ({employees, fromDate, toDate, employeeId, remainingBudgets, setFormState}) => {
    const onNameChange = (e) => {
        const selectedEmployeeId = e.target.value;
        if (selectedEmployeeId > 0) {
            setFormState('employeeId', selectedEmployeeId);
        }
    };


    const onDateChange = (key: string) => (date: Moment) => {
        setFormState(key, date.unix());
    };
    return (<>
        <Row>
            <Label htmlFor='requestName'>
                Name:
            </Label>
            <EmployeesDropdown
                onChange={onNameChange}
                employees={employees}
                required={true}
                noSelectOption="Select your name"
                selected={`${employeeId}`}
            />
        </Row>
        <Row>
            <Label>
                Vacation budget left: {getRemainingVacationBudget(remainingBudgets, employeeId)}
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
                             onChange={onDateChange('fromDate')}
                             minDate={moment()}
            />
        </Row>
        <Row>
            <Label htmlFor='requestTo'>
                To:
            </Label>
            <DatePickerInput required={true}
                             id='requestTo' name='toDate'
                             selected={toDate ? moment.unix(toDate) : null}
                             onChange={onDateChange('toDate')}
                             minDate={fromDate ? moment.unix(fromDate) : null}
            />
        </Row>
    </>)
};

RequestInnerForm.defaultProps = {
    employees: [],
    remainingBudgets: [],
    onInputChange: (e) => {},
    setFormState: (key: string, value: any) => {},
    fromDate: 0,
    toDate: 0,
    employeeId: "",
};

RequestInnerForm.propTypes = {
    employees: PropTypes.array.isRequired,
    remainingBudgets: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
    setFormState: PropTypes.func.isRequired,
    fromDate: PropTypes.number,
    toDate: PropTypes.number,
    employeeId: PropTypes.string,
};
export default FormHOC(RequestInnerForm);