import styled from 'styled-components';
import DountChart from '../../chart/DountChart';
import Box from '../../common/Box';
import Text from '../../common/Text';

function Synthesis() {
  return (
    <Box
      top={
        <>
          <h5>
            <span>종합</span>
            전적
          </h5>
          <p>200전 &nbsp; 59승&nbsp; 141패</p>
        </>
      }
      section={
        <>
          <Desc>
            <p>승률</p>
            <DountChart color="#07f" percent={0.3} size="85px" />
          </Desc>
          <Desc>
            <p>완주율</p>
            <DountChart color="#9bd728" percent={0.96} size="85px" />
          </Desc>
          <Desc>
            <p>리타이어율</p>
            <DountChart color="#f62459" percent={0.05} size="85px" />
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
