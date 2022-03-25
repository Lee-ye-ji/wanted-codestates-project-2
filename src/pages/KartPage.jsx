import styled from 'styled-components';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';

function KartPage() {
  return (
    <ContentMain>
      <Inner>
        <Menu />
        <Center>
          <img
            src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/d47aa62de79d88ecee263e07456555d99ff8957f1760d0f248667913acbc2b67.png?v=1648160410"
            alt="kart"
          />
        </Center>
        <h2>🚧 &nbsp;페이지 개발 중 입니다! &nbsp;🚧</h2>
      </Inner>
    </ContentMain>
  );
}

export default KartPage;

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
