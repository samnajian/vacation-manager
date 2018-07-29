import getRemainingVacationBudgetForEmployee from './getRemainingVacationBudgetForEmployee';
import IRequest from '../reducers/request/IRequest';
import IEmployee from '../reducers/employee/IEmployee';

describe('getRemainingVacationBudgetForEmployee', function () {
    const employee = {id: 10, vacationEntitlement: 10} as IEmployee;
    const firstOfJan = Date.parse("01.01.2018") / 1000;
    const secondOfJan = Date.parse("01.02.2018") / 1000;
    it('should get me the correct remaining budget if no request is approved', function () {
        const requests = [
            {
                employeeId: 10,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: false
            },
            {
                employeeId: 10,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: null
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee)).toEqual(
            {
                employeeId: 10,
                remainingBudget: 10
            }
        );
    });

    it('should get me the correct remaining budget if 1 request is rejected and 1 is approved ', function () {
        const requests = [
            {
                employeeId: 10,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 10,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: false
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee)).toEqual({employeeId: 10, remainingBudget: 8});
    });

    it('should get me the correct remaining budget if 1 request is rejected and 2 is approved', function () {
        const requests = [
            {
                employeeId: 12,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 10,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 10,
                fromDate: Date.parse("02.02.2018") / 1000,
                toDate: Date.parse("02.04.2018") / 1000,
                status: true
            }

        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee)).toEqual({
            employeeId: 10,
            remainingBudget: 5
        });
    });

    it('should get me the correct remaining budget if have had no requests', function () {
        const requests = [
            {
                employeeId: 12,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 20,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 30,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: true
            },
            {
                employeeId: 122,
                fromDate: firstOfJan,
                toDate: secondOfJan,
                status: false
            }
        ] as IRequest[];
        expect(getRemainingVacationBudgetForEmployee(requests)(employee).remainingBudget).toBe(10);
    });
});
