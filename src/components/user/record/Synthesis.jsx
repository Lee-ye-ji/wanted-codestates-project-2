import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useAverage from '../../../hooks/useAverage';
import DountChart from '../../chart/DountChart';
import Box from '../../common/Box';
import Loading from '../../common/Loading';
import Text from '../../common/Text';

function Synthesis() {
  const data = useSelector((state) => state.search.userList);
  // 승률
  const win = data.map(({ player }) =>
    player.matchWin === '' ? 0 : player.matchWin,
  );
  const avgWin = useAverage(win);
  // 완주율
  const time = data.map(({ player }) => (player.matchTime === '' ? 0 : 1));
  const aveTime = useAverage(time);
  // 리타이어율
  const retired = data.map(({ player }) =>
    player.matchRetired === '' ? 0 : player.matchRetired,
  );
  const avgRetired = useAverage(retired);
  if (data.length === 0) return <Loading />;
  return (
    <Box
      top={
        <>
          <h5>
            <span>종합</span>
            전적
          </h5>
          <p>최근 10경기</p>
        </>
      }
      section={
        <>
          <Desc>
            <p>승률</p>
            <DountChart color="#07f" percent={avgWin} size="85px" />
          </Desc>
          <Desc>
            <p>완주율</p>
            <DountChart color="#9bd728" percent={aveTime} size="85px" />
          </Desc>
          <Desc>
            <p>리타이어율</p>
            <DountChart color="#f62459" percent={avgRetired} size="85px" />
          </Desc>
        </>
      }
      bottom={
        <>
          <Text blue>최다주행</Text>
          <Text>모드</Text>
          <Text end>통합</Text>
        </>
      }
    />
  );
}

export default Synthesis;

const Desc = styled.div`
  position: relative;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border-right: 1px solid #f2f2f2;
`;
