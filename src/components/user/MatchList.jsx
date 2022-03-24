import styled, { css } from 'styled-components';

function MatchList({ key, timeAgo, myRank, track, kart, time, color }) {
  return (
    <Match key={key} color={color}>
      <Type>{timeAgo}</Type>
      <Result color={color}>#{myRank}</Result>
      <Track>{track}</Track>
      <Kart>{kart}</Kart>
      <Time>{time}</Time>
    </Match>
  );
}

export default MatchList;

const Match = styled.div`
  position: relative;
  box-sizing: border-box;
  display: table;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
  background-color: #fff;
  ${({ color }) =>
    color === 'blue' &&
    css`
      background-color: rgba(0, 119, 255, 0.05);
      border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
    `}
  ${({ color }) =>
    color === 'red' &&
    css`
      background-color: rgba(246, 36, 89, 0.05);
      border-color: #f2f2f2 #f2f2f2 #f2f2f2 #f62459;
    `}
  p {
    display: table-cell;
    vertical-align: middle;
    width: 150px;
    height: 30px;
  }
`;

const Type = styled.p`
  width: 65px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const Result = styled.p`
  color: #1f334a;
  opacity: 0.5;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  text-align: left;
  span {
    margin-left: 5px;
    font-size: 16px;
  }
  ${({ color }) =>
    color === 'blue' &&
    css`
      color: #07f;
      opacity: 1;
    `}
  ${({ color }) =>
    color === 'red' &&
    css`
      color: #f62459;
      opacity: 1;
    `}
`;

const Track = styled.p`
  position: relative;
  font-weight: 400;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const Kart = styled.p`
  position: relative;
  font-weight: 400;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const Time = styled.p`
  width: 100px;
  font-weight: 500;
  text-align: center;
`;
