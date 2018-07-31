import styled from 'styled-components';
import {mobileWidth} from './settings';
import PropTypes from 'react-proptypes';
import {HTMLAttributes} from 'react';

interface IRowProps extends HTMLAttributes<any> {
    reversed?: boolean;
}

const Row = styled.div.attrs<IRowProps>({className: 'row'})`
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    flex: 1;
    @media (min-width: ${mobileWidth}px) {
      flex-direction: ${({reversed}) => reversed ? 'row-reverse' : 'row' };
    }
`;

Row.displayName = 'Row';

Row.propTypes = {
    reversed: PropTypes.bool
};

Row.defaultProps = {
    reversed: false
};

export {Row};