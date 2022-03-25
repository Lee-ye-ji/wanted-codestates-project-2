import styled from 'styled-components';
import DownSpin from './DownSpin';
import Inner from './Inner';
import Menu from './Menu';

function PageTemplate({ mainText, subText1, subText2, imgsrc }) {
  return (
    <ContentMain>
      <Inner>
        <Menu />
        <Img src={imgsrc} alt="kart" />
        <DownSpin />
        <h1>{mainText}</h1>
        <br />
        <p>{subText1}</p>
        <p>{subText2}</p>
      </Inner>
    </ContentMain>
  );
}

export default PageTemplate;

const ContentMain = styled.div`
  width: 100%;
  background: #005fcc;
  position: relative;
  text-align: center;
  background-size: cover;
  color: #fff;
  overflow: hidden;
  height: 75vh;
`;

const Img = styled.img`
  position: absolute;
  top: 20%;
  left: 35%;
  width: 300px;
`;
