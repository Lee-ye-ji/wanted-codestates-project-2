import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function RankList() {
  const navigation = useNavigate();
  const { rankConfirm } = useSelector((state) => state.rank);
  // 4위 부터 자르기
  const forth = rankConfirm.slice(4);
  return (
    <Rank>
      <List>
        <li>
          <Head>
            <RankNum>#</RankNum>
            <Nick>닉네임 (순위변동)</Nick>
            <Pts>승률</Pts>
            <Cnt>리타이어</Cnt>
            <Ave>평균순위</Ave>
          </Head>
        </li>
        {forth.map((item, idx) => (
          <li key={idx} onClick={() => navigation(`/nick/${item.nick}`)}>
            <Info>
              <RankNum>{idx + 4}</RankNum>
              <Nick>{item.nick}</Nick>
              <Pts>{item.win}회</Pts>
              <Cnt>{item.retired}회</Cnt>
              <Ave>{item.rank}위</Ave>
            </Info>
          </li>
        ))}
      </List>
    </Rank>
  );
}

export default RankList;

const Rank = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.blue};
      border: 0.3px solid ${({ theme }) => theme.color.blue};
    }
  }
`;

const Head = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  background-color: ${({ theme }) => theme.color.blue};
`;

const Info = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

const RankNum = styled.span`
  vertical-align: middle;
  font-weight: 500;
  font-size: 16px;
`;

const Nick = styled.span`
  position: absolute;
  left: 220px;
`;

const Pts = styled.span`
  display: inline-block;
  width: 120px;
  position: absolute;
  right: 260px;
`;

const Cnt = styled.span`
  position: absolute;
  right: 140px;
`;

const Ave = styled.span`
  position: absolute;
  right: 60px;
`;
