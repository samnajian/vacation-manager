import styled from "styled-components";
import {fontColor, labelPadding} from "./settings";

const Label = styled.label`
    color: ${fontColor};
    width: 100%;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    padding: ${labelPadding}
`;


export default Label;