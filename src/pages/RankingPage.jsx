import styled from 'styled-components';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';

function RankingPage() {
  return (
    <Base>
      <Inner>
        <Menu />
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
