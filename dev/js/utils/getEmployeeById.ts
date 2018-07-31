import IEmployee from '../reducers/employee/IEmployee';

export default (employeeId: number, employees: IEmployee[]): IEmployee =>
    (employees.find((employee: IEmployee) => employee.id == employeeId) || {} as IEmployee);