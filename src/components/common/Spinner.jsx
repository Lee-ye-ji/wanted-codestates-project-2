import styled, { keyframes } from 'styled-components';

function Spinner({ size }) {
  return (
    <Spin className="spinner" viewBox="0 0 50 50" size={size}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </Spin>
  );
}

export default Spinner;

const rotate = keyframes`
    100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const colors = keyframes`
	0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const Spin = styled.svg`
  animation: ${rotate} 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 30% 0;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  .path {
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite,
      ${colors} 3s ease-in-out infinite;
  }
`;
