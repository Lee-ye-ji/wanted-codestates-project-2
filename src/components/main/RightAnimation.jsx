import styled, { keyframes } from 'styled-components';

function RightAnimation() {
  return (
    <>
      <CovidRight
        src="https://tmi.nexon.com/img/assets/covid_right.png"
        alt="covid_right"
      />
      <RightBgIn></RightBgIn>
    </>
  );
}

export default RightAnimation;

const dao = keyframes`
  0% {
    margin-right: -44.44em;
  }
  100% {
    margin-right: 0em;
  }
`;
const top = '11.11em';
const CovidRight = styled.img`
  display: block;
  position: absolute;
  right: 0;
  position: absolute;
  width: 21.11em;
  top: ${top};
  right: 5.56em;
  animation: ${dao} 0.7s ease-out;
`;

const RightBgIn = styled.span`
  position: absolute;
  width: 24.83em;
  height: 16.44em;
  top: ${top};
  right: 0;
  background-image: url('https://tmi.nexon.com/img/main_right_bg.png');
  background-size: cover;
  background-position: 50%;
  animation: ${dao} 0.7s ease-out;
  z-index: 1;
`;
