import styled from 'styled-components';
import {fontColor, inputHeight, lightGrayColor} from './settings';

const Select = styled.select`
    background: #fff;
    color: ${fontColor};
    border: 1px solid ${lightGrayColor};
    padding: 0.2rem;
    border-radius: 3px;
    height: ${inputHeight};
`;

export {Select};