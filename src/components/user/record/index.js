import Cheering from './Cheering';
import RankChange from './RankChange';
import Synthesis from './Synthesis';
import styled from 'styled-components';

function Speed() {
  return (
    <StatsThree>
      <Synthesis />
      <RankChange />
      <Cheering />
    </StatsThree>
  );
}

export default Speed;

const StatsThree = styled.div`
  margin-top: 20px;
  display: flex;
`;
