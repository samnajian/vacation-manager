import styled from 'styled-components';
import {mobileWidth} from './settings';

const Row = styled.div`
    display: flex;
    padding: 0.5rem;
    border: 1px solid #eee;
    flex-direction: column;
    flex: 1;
    @media (min-width: ${mobileWidth}px) {
      flex-direction: row;
    }
`;

export {Row};