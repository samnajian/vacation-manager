import React from 'react';
import {Col, Row, TbCol, TbRow} from './elements';
import IRequest from '../reducers/request/IRequest';
import WithDevice from './HOC/WithDevice';
import HeaderRow from './requests/HeaderRow';
import DataRow from './requests/DataRow';

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
