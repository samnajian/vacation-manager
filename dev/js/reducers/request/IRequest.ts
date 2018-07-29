interface IRequest {
    employeeId: number;
    duration: number;
    fromDate: number;
    toDate: number;
    status: boolean | null;
}

export default IRequest;