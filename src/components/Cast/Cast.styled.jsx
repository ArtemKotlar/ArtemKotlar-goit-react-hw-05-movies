import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  width: calc((100% - 20) / 6);
`;
export const Img = styled.img`
  display: block;
`;