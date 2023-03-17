import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Text = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  text-shadow: 3px 5px 6px #f50808;
  color: #083ff5;
  text-align: center;
  margin: 0;
  padding: 20px;
  background-image: url(https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg);
`;

export const MovieItem = styled.li`
  list-style: none;
  width: calc((100% - 20px) / 5);
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 0px 5px 10px #00ff62;
  background-color: rgb(7 50 23);
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
  color: #083ff5;
  text-decoration: none;
`;

export const Name = styled.p`
  margin: 0;
  padding: 20px 10px;
`;
