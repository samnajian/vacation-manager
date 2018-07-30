import styled from 'styled-components';
import PropTypes from 'react-proptypes';
import {fontColor, inputHeight, lightGrayColor} from './settings';

interface IInputProps {
    type: string;
}

const Input = styled.input.attrs<IInputProps>({
    type: (props: IInputProps) => props.type
})`
    background: #fff;
    color: ${fontColor};
    border: 1px solid ${lightGrayColor};
    padding: 0.2rem;
    border-radius: 3px;
    height: ${inputHeight};
`;

Input.defaultProps = {
    type: 'text'
};

Input.propTypes = {
    type: PropTypes.string
};

export {Input};