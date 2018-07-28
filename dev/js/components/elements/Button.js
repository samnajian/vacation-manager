import styled from "styled-components";
import PropTypes from "react-proptypes";
import {defaultColor, fontColor, inputHeight, primaryColor} from "./settings";

const Button = styled.button.attrs({
    type: props => props.type
})`
    background: ${props => props.primary ? primaryColor : defaultColor};
    color: ${props => props.primary ? '#fff' : fontColor};
    border: 1px solid #efefef;
    padding: 0.2rem 1.3rem;
    border-radius: 3px;
    cursor: pointer;
    transition: color .2s ease-in-out,background .2s ease-in-out,border .2s ease-in-out;
    height: ${inputHeight};
    &:hover {
       background: ${props => props.primary ? defaultColor : primaryColor};
       color: ${props => props.primary ? fontColor : '#fff'};
    }
`;

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    primary: PropTypes.bool,
    type:    PropTypes.string
};

export default Button;