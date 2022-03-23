import styled, { keyframes } from 'styled-components';
import { COVID_RIGHT, MAIN_RIGHT_BG } from '../../constants/image';

function RightAnimation() {
  return (
    <>
      <CovidRight src={COVID_RIGHT} alt="covid_right" />
      <RightBgIn></RightBgIn>
    </>
  );
}

export default RightAnimation;

const dao = keyframes`
  0% {
    margin-right: -700px;
  }
  100% {
    margin-right: 0em;
  }
`;
const top = '200px';
const CovidRight = styled.img`
  display: block;
  position: absolute;
  right: 0;
  position: absolute;
  width: 380px;
  top: ${top};
  right: 5.56em;
  animation: ${dao} 0.7s ease-out;
  z-index: 10;
`;

const RightBgIn = styled.span`
  position: absolute;
  width: 447px;
  height: 296px;
  top: ${top};
  right: 0;
  background-image: url(${MAIN_RIGHT_BG});
  background-size: cover;
  background-position: 50%;
  animation: ${dao} 0.7s ease-out;
  z-index: 20;
`;
