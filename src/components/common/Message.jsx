import styled, { keyframes, css } from 'styled-components';

function Message({ children }) {
  return <MessageCustom>{children}</MessageCustom>;
}

export default Message;

const fadein = keyframes`
  0% { top: 50px; opacity: 0; }
  100% { top: 100px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: 100px; opacity: 1; }
  100% { top: 50px; opacity: 0; }
`;

const MessageCustom = styled.div`
  background-color: ${(props) => props.theme.color.navy};
  color: ${(props) => props.theme.color.white};
  position: fixed;
  width: 20rem;
  height: 3rem;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin-left: calc(230px / 2);
  animation: ${css`
    ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
  `};
  animation-fill-mode: forwards;
`;
