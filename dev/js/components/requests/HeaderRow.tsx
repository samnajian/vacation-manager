import {Col} from '../elements';
import React, {StatelessComponent} from 'react';

const HeaderRow: StatelessComponent = () => <>
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

HeaderRow.displayName = 'RequestsHeaderRow';
export default HeaderRow;