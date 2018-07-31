import {IRemainingVacationBudget} from './getRemainingVacationBudgetForEmployee';

export default (remainingBudgets: IRemainingVacationBudget[], selectedEmployeeId: number | string): number => selectedEmployeeId
    ? remainingBudgets.find(
        (budget: IRemainingVacationBudget) => budget.employeeId == selectedEmployeeId
    ).remainingBudget
    : 0;