import {Button, Col, Row} from '../elements';
import formatTimestamp from '../../utils/formatTimestamp';
import React from 'react';
import getRemainingVacationBudget from '../../utils/getRemainingVacationBudget';
import getEmployeeById from '../../utils/getEmployeeById';

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
        {getRemainingVacationBudget(remainingBudgets, request.employeeId)}
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

export default DataRow;