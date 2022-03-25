import styled, { keyframes } from 'styled-components';
import { COVID_LEFT, MAIN_LEFT_BG } from '../../constants/image';

function LeftAnimation() {
  return (
    <>
      <CovidLeft src={COVID_LEFT} alt="covid_left" />
      <LeftBgIn></LeftBgIn>
    </>
  );
}

export default LeftAnimation;

const bazzie = keyframes`
  0% {
    margin-left: -700px;
  }
  100% {
    margin-left: 0;
  }
`;

const top = '200px';
const CovidLeft = styled.img`
  position: absolute;
  width: 380px;
  top: ${top};
  left: 0;
  padding-left: 100px;
  animation: ${bazzie} 0.7s ease-out;
  z-index: 10;
`;

const LeftBgIn = styled.span`
  position: absolute;
  width: 447px;
  height: 296px;
  top: ${top};
  left: 0;
  background-image: url(${MAIN_LEFT_BG});
  background-size: cover;
  background-position: 50%;
  animation: ${bazzie} 0.7s ease-out;
  z-index: 20;
`;
