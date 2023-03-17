import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Back = styled(NavLink)`
  display: block;
  margin: 30px 0;
  color: #083ff5;
  text-decoration: none;
  font-weight: 700;
  font-size: 22px;
`;