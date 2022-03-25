import React from 'react';
import { useSelector } from 'react-redux';
import useRank from '../../../hooks/useRank';
import LineChart from '../../chart/LineChart';
import Box from '../../common/Box';
import Loading from '../../common/Loading';
import Text from '../../common/Text';

function RankChange() {
  const userList = useSelector((state) => state.search.userList);
  const data = userList.map(({ player }) =>
    player.matchRank === '' ? 0 : player.matchRank,
  );
  const [arr] = useRank(data);

  if (data.length === 0) return <Loading />;
  return (
    <Box
      top={
        <>
          <h5>
            <span>순위변동</span>
            추이
          </h5>
          <p>
            지난 10경기
            <span>{data[1]}.5위</span> 최근 경기
            <span>{data[1]}위</span>
          </p>
        </>
      }
      section={<LineChart points={arr} data={data} />}
      bottom={<Text navy>지난 10경기를 순위 그래프로 나타난 결과입니다.</Text>}
    />
  );
}

export default RankChange;
