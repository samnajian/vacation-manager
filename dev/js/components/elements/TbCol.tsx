import styled from 'styled-components';
import {mobileWidth} from './settings';
import PropTypes from 'react-proptypes';

interface ITbColProps {
    span?: number;
    mobileOnly?: boolean;
    desktopOnly?: boolean;
}

const TbCol = styled.div<ITbColProps>`
    padding: 0.2rem;
    flex: ${(props: ITbColProps) => props.span ? props.span : 1};
   ${(props: ITbColProps) => props.desktopOnly ? 'display: none;' : ''}
    @media (min-width: ${mobileWidth}px) {
      flex-direction: row;
      ${(props: ITbColProps) => props.mobileOnly ? 'display: none;' : ''}
    }
`;

TbCol.propTypes = {
    span: PropTypes.number,
    mobileOnly: PropTypes.bool,
    desktopOnly: PropTypes.bool,
};

export {TbCol};