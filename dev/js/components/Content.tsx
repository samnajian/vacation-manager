import React, {StatelessComponent} from 'react';
import {Row} from './elements';

const Content: StatelessComponent = ({children}) =>
    <Row className='content'>{children}</Row>
;

Content.displayName = "Content";
export default Content;