import styled from 'styled-components';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';

function TrackPage() {
  return (
    <ContentMain>
      <Inner>
        <Menu />
        <Center>
          <img
            src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/track/7394f4ea05d4115bc1308101998132e50e366c4456c6368a1800a494c6f8c0c1.png"
            alt="kart"
          />
        </Center>
        <h2>🚧 &nbsp;페이지 개발 중 입니다! &nbsp;🚧</h2>
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
  height: 85vh;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
