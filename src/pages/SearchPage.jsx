import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchResult } from '../store/actions/search';
import { useParams } from 'react-router-dom';
import Profile from '../components/rank/profile';
import MatchMessage from '../components/rank/MatchMessage';
import Battle from '../components/rank/Battle';
import Record from '../components/rank/record';
import Inner from '../components/common/Inner';
import Menu from '../components/common/Menu';
import Info from '../components/rank/Info';

function SearchPage() {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(searchResult(name));
  }, [dispatch, name]);

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
          <Record />
          <Info />
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
