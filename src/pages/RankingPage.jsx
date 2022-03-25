import styled from 'styled-components';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';
import Wave from '../components/rank/Wave';
import RankList from '../components/rank/RankList';
import TopRank from '../components/rank/TopRank';
import SelectButtons from '../components/rank/SelectButtons';
import Explanation from '../components/rank/Explanation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rankResult } from '../store/actions/rank';
import Search from '../components/common/Search';

function RankingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rankResult());
  }, [dispatch]);

  return (
    <>
      <Base>
        <Inner>
          <Menu />
          <Search />
          <PageDesc>
            <Explanation />
            <SelectButtons />
          </PageDesc>
          <TopRank />
        </Inner>
        <Wave />
      </Base>
      <Inner>
        <RankList />
      </Inner>
    </>
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

const PageDesc = styled.div`
  z-index: 5;
  position: relative;
  padding-top: 120px;
  margin: 0 auto;
  background-color: transparent;
  text-align: left;
`;
