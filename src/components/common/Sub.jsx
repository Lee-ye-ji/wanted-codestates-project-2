import styled, { css } from 'styled-components';

function Sub({ children, color }) {
  return <SubPar color={color}>{children}</SubPar>;
}

export default Sub;

const SubPar = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
  color: ${({ theme }) => theme.color.white};
  span {
    font-weight: 500;
    margin-right: 5px;
  }
  ${({ color }) =>
    color === 'black' &&
    css`
      color: ${({ theme }) => theme.color.black};
      text-align: left;
      padding-left: 0;
      span {
        margin: 0;
      }
    `}
`;
