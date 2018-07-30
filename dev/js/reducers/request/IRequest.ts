interface IRequest {
    id: number,
    employeeId: number;
    fromDate: number;
    toDate: number;
    status: boolean | null;
}

export default IRequest;