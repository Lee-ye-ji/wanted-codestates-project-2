import styled from 'styled-components';
import Inner from '../components/Inner';
import Menu from '../components/Menu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchResult } from '../store/actions/search';
import { useParams } from 'react-router-dom';
import Profile from '../components/rank/profile/Profile';
import MatchMessage from '../components/rank/MatchMessage';
import Battle from '../components/rank/Battle';
import Stats from '../components/rank/Stats';

function SearchPage() {
  const dispatch = useDispatch();
  // const result = useSelector((state) => state);
  // console.log(result);
  const { id } = useParams();

  useEffect(() => {
    dispatch(searchResult(id));
  }, [dispatch, id]);

  return (
    <>
      <TabArea>
        <Inner>
          <Menu />
        </Inner>
        <Content>
          <MatchMessage />
          <Profile />
          <Battle />
          <Stats />
        </Content>
      </TabArea>
    </>
  );
}

export default SearchPage;

const TabArea = styled.div`
  background: ${({ theme }) => theme.color.backgroundBlue};
  height: 8vh;
`;

const Content = styled(Inner)`
  padding-top: 70px;
`;
