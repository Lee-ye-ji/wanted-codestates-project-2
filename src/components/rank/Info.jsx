import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import hourAgo from '../../util/hourAgo';
import kartName from '../../util/kartName';
import matchTime from '../../util/matchTime';
import trackName from '../../util/trackName';
import MatchList from './MatchList';
import { useState, useEffect } from 'react';
import { scrollResult } from '../../store/actions/search';
import { useParams } from 'react-router-dom';
import useIntersect from '../../hooks/useIntersect';

function Info() {
  const { userList } = useSelector((state) => state.search);
  const [isLoading, setIsLoading] = useState(false);
  const [isCount, setIsCount] = useState(10);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    if (isCount < 300) {
      console.log(isCount);
      dispatch(scrollResult(name, isCount));
      setIsLoading(false);
    }
  }, [dispatch, isCount, name, userList.lengh]);

  const [, setRef] = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    setIsLoading(true);
    await setIsCount((prev) => prev + 50);
    observer.observe(entry.target);
  }, {});

  return (
    <Content>
      {userList.map((info, index) => (
        <MatchList
          key={index}
          timeAgo={hourAgo(info.endTime)}
          myRank={
            info.player.matchRank === '99' ? (
              '리타이어'
            ) : (
              <>
                {info.player.matchRank}
                <span>/ {info.playerCount}</span>
              </>
            )
          }
          track={trackName(info.trackId)}
          kart={kartName(info.player.kart)}
          time={matchTime(info.player.matchTime)}
          color={
            info.player.matchRank === '99'
              ? 'red'
              : info.player.matchRank === '1'
              ? 'blue'
              : null
          }
        />
      ))}
      <div ref={setRef}>
        {userList.length === 200
          ? '마지막 데이터 입니다.'
          : isLoading && 'Loading...'}
      </div>
    </Content>
  );
}

export default Info;

const Content = styled.div`
  margin: 0 auto;
  padding: 50px 0;
`;
