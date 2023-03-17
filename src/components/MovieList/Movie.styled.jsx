import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const MovieItem = styled.li`
  width: calc((100% - 20px) / 5);
`;

export const MovieImg = styled.img`
  display: block;
  width: 100%;
`;

export const Link = styled(NavLink)`
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #2b7bc8;
  border-bottom: solid 5px #2b7bc8;
  text-decoration: none;
`;

export const Name = styled.p`
  margin: 0;
  padding: 20px 10px;
`;
