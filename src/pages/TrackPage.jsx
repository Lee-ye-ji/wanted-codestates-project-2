import styled from 'styled-components';
import DownSpin from '../components/common/DownSpin';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';

function TrackPage() {
  return (
    <ContentMain>
      <Inner>
        <Menu />
        <Img
          src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/eb333073a3486846660dc9e82e6b0c55c508c31853e4f4151d36f4b7fe17fe33.png?v=1648207117"
          alt="kart"
        />
        <DownSpin />
        <h1>현재 페이지 준비 중입니다.</h1>
        <br />
        <p>보다 나은 서비스를 제공하기 위해서 페이지를 준비 중에 있습니다.</p>
        <p>빠른 시일 내에 준비하여 찾아뵙겠습니다.</p>
      </Inner>
    </ContentMain>
  );
}

export default TrackPage;

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
