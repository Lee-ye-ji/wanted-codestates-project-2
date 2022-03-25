import { BiInfoCircle } from 'react-icons/bi';
import styled from 'styled-components';

function MatchMessage() {
  return (
    <Match>
      <BiInfoCircle /> &nbsp;
      <span>
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
      </span>
    </Match>
  );
}

export default MatchMessage;

const Match = styled.div`
  padding: 2em 1em;
`;
