import styled, { css } from 'styled-components';

function Text({ children, size, ...rest }) {
  return (
    <TextStyle size={size} {...rest}>
      {children}
    </TextStyle>
  );
}

export default Text;

const TextStyle = styled.span`
  font-size: 12px;
  ${(props) =>
    props.blue &&
    css`
      color: ${({ theme }) => theme.color.blue};
    `}
  ${(props) =>
    props.navy &&
    css`
      color: ${({ theme }) => theme.color.navy};
      font-size: 10px;
    `}
  ${(props) =>
    props.end &&
    css`
      position: absolute;
      right: 8px;
      font-size: 20px;
      font-weight: 500;
    `};
`;
