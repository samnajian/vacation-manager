import styled from 'styled-components';
import {mobileWidth} from './settings';
import PropTypes from 'react-proptypes';

interface IColProps {
    span?: number;
}

const Col = styled.div<IColProps>`
    padding: 0.2rem;
    flex: ${(props: IColProps) => props.span ? props.span : 1};
    @media (min-width: ${mobileWidth}px) {
      flex-direction: row;
    }
`;

Col.propTypes = {
    span: PropTypes.number
};

export {Col};