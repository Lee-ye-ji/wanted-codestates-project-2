import styled from 'styled-components';
import Inner from '../components/Inner';
import Tab from '../components/Tab';

function RankingPage() {
  return (
    <Base>
      <Inner>
        <Tab />
      </Inner>
    </Base>
  );
}

export default RankingPage;

const Base = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  height: 85vh;
  background: #005fcc;
`;
