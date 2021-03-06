import IEmployee from '../reducers/employee/IEmployee';
import IRequest from '../reducers/request/IRequest';
import dateDifferenceInDays from './dateDifferenceInDays';

export interface IRemainingVacationBudget {
    employeeId: number;
    remainingBudget: number;
}

export default (requests: IRequest[]) => (employee: IEmployee): IRemainingVacationBudget => {
    const totalApprovedRequests = requests
        .filter((request: IRequest) => request.employeeId == employee.id)
        .reduce((all, current: IRequest) => {
            if (current.status === true) {
                const duration = dateDifferenceInDays(current.toDate, current.fromDate) + 1;
                all += duration;
            }
            return all
        }, 0);

    return {
        employeeId: employee.id,
        remainingBudget: employee.vacationEntitlement - totalApprovedRequests
    };
};