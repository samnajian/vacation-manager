import getRemainingVacationBudgetForEmployee from './getRemainingVacationBudgetForEmployee';
import IRequest from '../reducers/request/IRequest';
import IEmployee from '../reducers/employee/IEmployee';

describe('getRemainingVacationBudgetForEmployee', function () {
    const employee = {id: 10, vacationEntitlement: 10} as IEmployee;

    it('should get me the correct remaining budget if no request is approved', function () {
        const requests = [
            {
                employeeId: 10,
                duration: 2,
                status: false
            },
            {
                employeeId: 10,
                duration: 4,
                status: null
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee).remainingBudget).toBe(10);
    });

    it('should get me the correct remaining budget if 1 request is rejected and 1 is approved ', function () {
        const requests = [
            {
                employeeId: 10,
                duration: 2,
                status: true
            },
            {
                employeeId: 10,
                duration: 4,
                status: false
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee).remainingBudget).toBe(8);
    });

    it('should get me the correct remaining budget if 1 request is rejected and 2 is approved', function () {
        const requests = [
            {
                employeeId: 12,
                duration: 2,
                status: true
            },
            {
                employeeId: 10,
                duration: 2,
                status: true
            },
            {
                employeeId: 10,
                duration: 2,
                status: true
            },
            {
                employeeId: 10,
                duration: 4,
                status: false
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee).remainingBudget).toBe(6);
    });

    it('should get me the correct remaining budget if have had no requests', function () {
        const requests = [
            {
                employeeId: 12,
                duration: 2,
                status: true
            },
            {
                employeeId: 20,
                duration: 2,
                status: true
            },
            {
                employeeId: 30,
                duration: 2,
                status: true
            },
            {
                employeeId: 122,
                duration: 4,
                status: false
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee).remainingBudget).toBe(10);
    });
});
