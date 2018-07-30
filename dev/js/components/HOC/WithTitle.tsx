import React, {Component} from 'react';
import {Col, H3} from '../elements';

export default (title: string) => Original => class extends Component {
    render() {
        return <>
            <Col>
                <H3>
                    {title}
                </H3>
                {<Original {...this.props}/>}
            </Col>
        </>;
    }
};