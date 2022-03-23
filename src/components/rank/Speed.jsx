import styled from 'styled-components';
import DountChart from '../DountChart';

function Speed() {
  return (
    <>
      <Box>
        <Top>
          <h5>
            <span>종합</span>
            전적
          </h5>
          <p>
            200전 &nbsp;
            <span>59승</span> &nbsp;
            <span>141패</span>
          </p>
        </Top>
        <Section>
          <Desc>
            <p>승률</p>
            <DountChart color="#07f" percent={0.3} />
          </Desc>
          <Desc>
            <p>완주율</p>
            <DountChart color="#9bd728" percent={0.96} />
          </Desc>
          <Desc>
            <p>리타이어율</p>
            <DountChart color="#f62459" percent={0.05} />
          </Desc>
        </Section>
      </Box>
      <Box />
      <Box />
    </>
  );
}

export default Speed;

const Box = styled.div`
  position: relative;
  flex: 1;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const Top = styled.div`
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  color: #1f334a;
  h5 {
    span {
      margin-right: 5px;
      font-size: 14px;
      color: #07f;
    }
  }
  p {
    position: absolute;
    top: 3px;
    right: 20px;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Section = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  text-align: center;
`;

const Desc = styled.div`
  position: relative;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border-right: 1px solid #f2f2f2;
`;
