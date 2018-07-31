import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {mobileWidth, primaryColor} from './settings';

const StyledNavLink = styled(NavLink)`
     color: #fff;
     padding: 0 1rem;
     font-size: 0.8rem;
     white-space: nowrap;
     text-decoration: none;
     @media (min-width: ${mobileWidth}px) {
      font-size: 1rem;
    }
    &:hover,
    &.active{
      color: ${primaryColor};
    }
`;
export {StyledNavLink}