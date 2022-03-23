import styled from 'styled-components';
import Speed from './Speed';

function Stats() {
  return (
    <StatsThree>
      <Speed />
    </StatsThree>
  );
}

export default Stats;

const StatsThree = styled.div`
  margin-top: 20px;
  display: flex;
`;
