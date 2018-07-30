import React, {StatelessComponent} from 'react';
import IEmployee from '../reducers/employee/IEmployee';
import {Select} from './elements';
import PropTypes from 'react-proptypes';

interface IEmployeesDropdown {
    employees: IEmployee[];
    onChange: (e) => any;
    required: boolean;
    noSelectOption: string;
    selected?: string;
}

const EmployeesDropdown: StatelessComponent<IEmployeesDropdown> = ({employees, onChange, required, noSelectOption, selected}) =>
    <Select
        id='requestName'
        required={required}
        name='employeeId'
        onChange={onChange}
        value={selected}
    >
        <option value="-1">{noSelectOption}</option>
        {employees.map((employee: IEmployee) =>
            <option
                key={employee.id}
                value={employee.id}
            >
                {employee.firstName}&nbsp;{employee.lastName}
            </option>)
        }
    </Select>;

EmployeesDropdown.displayName = 'EmployeesDropdown';

EmployeesDropdown.propTypes = {
    employees: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    noSelectOption: PropTypes.string,
    selected: PropTypes.string
};

EmployeesDropdown.defaultProps = {
    employees: [],
    onChange: (e) => {},
    required: true,
    noSelectOption: 'No Option Selected',
    selected: ""
};

export default EmployeesDropdown;