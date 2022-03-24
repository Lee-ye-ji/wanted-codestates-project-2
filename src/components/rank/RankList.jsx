import styled from 'styled-components';

function RankList() {
  return (
    <Rank>
      <List>
        <li>
          <Head>
            <RankNum>#</RankNum>
            <Nick>닉네임 (순위변동)</Nick>
            <Pts>누적포인트 (전일대비)</Pts>
            <Cnt>주행횟수</Cnt>
            <Ave>평균순위</Ave>
          </Head>
        </li>
        <li>
          <Info>
            <RankNum>4</RankNum>
            <Nick>1234Kcm</Nick>
            <Pts>3,608 PT</Pts>
            <Cnt>508회</Cnt>
            <Ave>2.3위</Ave>
          </Info>
        </li>
        <li>
          <Info>
            <RankNum>4</RankNum>
            <Nick>1234Kcm</Nick>
            <Pts>3,608 PT</Pts>
            <Cnt>508회</Cnt>
            <Ave>2.3위</Ave>
          </Info>
        </li>
        <li>
          <Info>
            <RankNum>4</RankNum>
            <Nick>1234Kcm</Nick>
            <Pts>3,608 PT</Pts>
            <Cnt>508회</Cnt>
            <Ave>2.3위</Ave>
          </Info>
        </li>
        <li>
          <Info>
            <RankNum>4</RankNum>
            <Nick>1234Kcm</Nick>
            <Pts>3,608 PT</Pts>
            <Cnt>508회</Cnt>
            <Ave>2.3위</Ave>
          </Info>
        </li>
        <li>
          <Info>
            <RankNum>4</RankNum>
            <Nick>1234Kcm</Nick>
            <Pts>3,608 PT</Pts>
            <Cnt>508회</Cnt>
            <Ave>2.3위</Ave>
          </Info>
        </li>
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
