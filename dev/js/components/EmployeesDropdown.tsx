import React from 'react';
import IEmployee from '../reducers/employee/IEmployee';

const EmployeesDropdown = (employees: IEmployee[]) => employees.map((employee: IEmployee) =>
    <option key={employee.id} value={employee.id}>{employee.firstName}&nbsp;{employee.lastName}</option>);

export default EmployeesDropdown;