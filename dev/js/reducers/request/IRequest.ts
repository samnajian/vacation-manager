interface IRequest {
    employeeId: number;
    fromDate: number;
    toDate: number;
    status: boolean | null;
}

export default IRequest;