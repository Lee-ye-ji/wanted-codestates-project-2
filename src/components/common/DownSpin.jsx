import styled, { keyframes, css } from 'styled-components';

function DownSpin() {
  return <Spin></Spin>;
}

export default DownSpin;

const three = true;

const wiggle = keyframes`
 30% { transform: perspective(size) rotateX(66deg); }
  40% { transform: perspective(size) rotateX(65deg); }
  50% { transform: perspective(size) rotateX(68deg); }
  60% { transform: perspective(size) rotateX(64deg); }
`;

const spinn = keyframes`
    100% { transform: rotate(360deg); }
`;

const fade = keyframes`
  20% { opacity: .1; }
  40% { opacity: 1; }
  60% { opacity: .1; }
`;

const Spin = styled.div`
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 400px;
  height: 400px;
  border-radius: calc(400px / 2);
  border: 4px solid hsla(0, 0%, 100%, 0.1);
  ${three &&
  css`
    transform: perspective(400px) rotateX(66deg);
    animation: ${wiggle} 1.2s infinite;
  `}
  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    margin: 4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: ${spinn} 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      ${fade} 1.2s linear infinite;
  }
  &::before {
    border-top-color: hsl(190, 100%, 70%);
  }
  &::after {
    border-top-color: hsl(50, 80%, 70%);
    animation-delay: calc(1.2s * 0.25);
  }
`;
