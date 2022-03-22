import styled from 'styled-components';
import Inner from '../components/Inner';
import Menu from '../components/Menu';
import { BiInfoCircle } from 'react-icons/bi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchResult } from '../store/actions/search';
import { useParams } from 'react-router-dom';

function SearchPage() {
  const dispatch = useDispatch();
  // const result = useSelector((state) => state);
  // console.log(result);
  const { id } = useParams();

  useEffect(() => {
    dispatch(searchResult(id));
  }, [dispatch, id]);

  return (
    <div>
      <TabArea>
        <Inner>
          <Menu />
        </Inner>
        <Content>
          <Inner>
            <Match>
              <BiInfoCircle /> &nbsp;
              <span>
                카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
              </span>
            </Match>
            <Profile>
              <Nick>
                <User>
                  <img src="" alt="character" />
                </User>
                <Name></Name>
                <Rank></Rank>
              </Nick>
            </Profile>
          </Inner>
        </Content>
      </TabArea>
    </div>
  );
}

export default SearchPage;

const TabArea = styled.div`
  background: #005fcc;
  height: 10.5vh;
`;

const Profile = styled.div`
  position: relative;
  height: 175px;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url('https://tmi.nexon.com/img/background_flag_w.png');
  background-size: cover;
  background-position: 50%;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  z-index: 2;
`;

const Nick = styled.div`
  display: flex;
  height: 175px;
  width: 100%;
`;

const User = styled.div`
  width: 10em;
  background-color: palegoldenrod;
  background-image: url();
  img {
    width: 10em;
    text-align: center;
    vertical-align: middle;
    object-fit: contain;
    height: 175px;
  }
`;

const Name = styled.div`
  width: 10em;
  background-color: palegreen;
`;

const Rank = styled.div`
  width: 10em;
  background-color: paleturquoise;
  align-items: flex-end;
`;

const Content = styled.div`
  padding-top: 50px;
`;

const Match = styled.div`
  padding: 2em 1em;
  font-size: 12px;
`;
