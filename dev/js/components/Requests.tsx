import React from 'react';
import {Button, Col, Row, TbCol, TbRow} from './elements';
import IRequest from '../reducers/request/IRequest';
import IEmployee from '../reducers/employee/IEmployee';
import {IRemainingVacationBudget} from '../utils/getRemainingVacationBudgetForEmployee';
import formatTimestamp from '../utils/formatTimestamp';
import WithDevice from './HOC/WithDevice';

const getEmployeeById = (employeeId: number, employees: IEmployee[]): IEmployee =>
    (employees.find((employee: IEmployee) => employee.id == employeeId) || {} as IEmployee);

const getRemainingBudgetForEmployee = (employeeId: number, remainingBudgets: IRemainingVacationBudget[]): IRemainingVacationBudget =>
    (remainingBudgets.find((budget: IRemainingVacationBudget) => budget.employeeId == employeeId) || {} as IRemainingVacationBudget);

const HeaderRow = () => <>
    <Col span={2}>
        Name
    </Col>
    <Col span={1}>
        From
    </Col>
    <Col span={1}>
        To
    </Col>
    <Col span={1}>
        Remaining budget
    </Col>
    <Col span={1}>
        Status
    </Col>
</>;

const DataRow = ({request, employees, remainingBudgets, approve, reject}) => <>
    <Col span={2}>
        {getEmployeeById(request.employeeId, employees).firstName}&nbsp;{getEmployeeById(request.employeeId, employees).lastName}
    </Col>
    <Col span={1}>
        {formatTimestamp(request.fromDate)}
    </Col>
    <Col span={1}>
        {formatTimestamp(request.fromDate)}
    </Col>
    <Col span={1}>
        {getRemainingBudgetForEmployee(request.employeeId, remainingBudgets).remainingBudget}
    </Col>
    <Col span={1}>
        {request.status === null &&
        <Row>
            <Button size={'small'} onClick={() => reject(request)}>Reject</Button>
            <Button size={'small'} primary onClick={() => approve(request)}>Approve</Button>
        </Row>
        }
        {request.status === true && <span>Approved</span>}
    </Col>
</>;

const Requests = ({openRequests, employees, remainingBudgets, isMobile, approve, reject}) => isMobile
    ? <Row>
        {openRequests.map((request: IRequest) =>
            <TbRow key={request.id}>
                <TbCol mobileOnly>
                    <HeaderRow/>
                </TbCol>
                <Col>
                    <DataRow
                        request={request}
                        employees={employees}
                        remainingBudgets={remainingBudgets}
                        approve={approve}
                        reject={reject}
                    />
                </Col>
            </TbRow>
        )
        }</Row>
    : <Row>
        {approve}
        {reject}
        <Col>
            <TbRow>
                <HeaderRow/>
            </TbRow>

            {
                openRequests.map((request: IRequest) =>
                    <TbRow key={request.id}>
                        <DataRow
                            request={request}
                            employees={employees}
                            remainingBudgets={remainingBudgets}
                            approve={approve}
                            reject={reject}
                        />
                    </TbRow>
                )
            }
        </Col>
    </Row>;

export default WithDevice(Requests);
