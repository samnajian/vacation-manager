import styled from 'styled-components';
import {mobileWidth} from './settings';

const Row = styled.div.attrs({className: 'row'})`
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    flex: 1;
    @media (min-width: ${mobileWidth}px) {
      flex-direction: row;
    }
`;
export {Row};