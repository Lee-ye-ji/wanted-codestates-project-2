import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
  return (
    <MenuStyle>
      <li>
        <NavLink to="/">홈</NavLink>
      </li>
      <li>
        <NavLink to="/rank">랭킹</NavLink>
      </li>
      <li>
        <NavLink to="/kart">카트</NavLink>
      </li>
      <li>
        <NavLink to="/track">트랙</NavLink>
      </li>
    </MenuStyle>
  );
}

export default Menu;

const MenuStyle = styled.ul`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  height: 55px;
  li {
    font-size: 14px;
    width: 120px;
    line-height: 55px;
    text-align: center;
    vertical-align: middle;
    float: left;
    list-style: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};
      width: 100px;
      display: block;
      opacity: 0.5;
      &::after {
        position: absolute;
        display: block;
        content: ' ';
        bottom: -1;
        margin: 0 auto;
        width: 0;
        border-bottom: 4px solid ${({ theme }) => theme.color.white};
        transition: all 0.15s ease-in-out;
      }
      &:hover {
        opacity: 1;
      }
      &:hover:not(.active)::after {
        width: 100px;
      }
    }
    .active {
      color: ${({ theme }) => theme.color.white};
      border-bottom: 4px solid ${({ theme }) => theme.color.white};
      opacity: 1;
    }
  }
`;
