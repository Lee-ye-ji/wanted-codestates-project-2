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
    margin-left: -44.44em;
  }
  100% {
    margin-left: 0em;
  }
`;

const top = '11.11em';
const CovidLeft = styled.img`
  display: block;
  position: absolute;
  width: 21.11em;
  top: ${top};
  left: 5.56em;
  animation: ${bazzie} 0.7s ease-out;
`;

const LeftBgIn = styled.span`
  position: absolute;
  width: 24.83em;
  height: 16.44em;
  top: ${top};
  left: 0;
  z-index: 87;
  background-image: url(${MAIN_LEFT_BG});
  background-size: cover;
  background-position: 50%;
  animation: ${bazzie} 0.7s ease-out;
  z-index: 1;
`;
