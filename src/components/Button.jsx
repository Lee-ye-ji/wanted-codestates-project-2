import styled, { css } from 'styled-components';

function Button({ children, ...rest }) {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
}

export default Button;

const ButtonStyle = styled.button`
  vertical-align: middle;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid ${({ theme }) => theme.color.navy};
  border-radius: 15px;
  background-color: transparent;
  margin-top: 20px;
  margin-right: 10px;
  ${(props) =>
    props.blue &&
    css`
      background: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
    `}
  ${(props) =>
    props.white &&
    css`
      color: ${({ theme }) => theme.color.white};
      border: 0.7px solid ${({ theme }) => theme.color.white};
    `}
`;
