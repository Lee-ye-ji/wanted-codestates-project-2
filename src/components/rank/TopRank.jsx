import DountChart from '../chart/DountChart';
import { FaPlusCircle } from 'react-icons/fa';
import Sub from '../common/Sub';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TopRank() {
  const navigation = useNavigate();
  const { rankConfirm } = useSelector((state) => state.rank);

  // 상위 세개 자르기
  const split = rankConfirm.slice(0, 3);

  const medalArr = [
    'https://tmi.nexon.com/img/assets/icon_goldmedal.png',
    'https://tmi.nexon.com/img/assets/icon_silvermedal.png',
    'https://tmi.nexon.com/img/assets/icon_bronzemedal.png',
  ];

  return (
    <Top>
      {split.map((item, idx) => (
        <Ranker key={idx} onClick={() => navigation(`/nick/${item.nick}`)}>
          <Medal src={medalArr[idx]} alt={idx + '등'} />
          <Name>
            <Nick>{item.nick}</Nick>
            <Sub color="black">
              순위
              <span>{idx + 1}위</span>
            </Sub>
            <Sub color="black">
              매치 시간
              <span>{item.time}</span>
              <Green>
                <FaPlusCircle />
              </Green>
            </Sub>
          </Name>
          <CharaterImg
            src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${item.img}.png`}
            alt="profile"
          />
          <PercentBox>
            <DountRate>
              <p>승률</p>
              <DountChart
                color="#07f"
                percent={item.win === '0' ? 0.53 : 0.9}
                size="65px"
              />
            </DountRate>
            <DountRate>
              <p>리타이어율</p>
              <DountChart
                color="#f62459"
                percent={item.retired === '0' ? 0 : item.retired * 0.1}
                size="65px"
              />
            </DountRate>
          </PercentBox>
        </Ranker>
      ))}
    </Top>
  );
}

export default TopRank;

const Top = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  margin: 0 auto;
`;

const Medal = styled.img`
  position: absolute;
  top: -12px;
  left: 10px;
`;

const Ranker = styled.div`
  position: relative;
  display: inline-block;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  text-align: left;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.navy};
    color: ${({ theme }) => theme.color.white};
  }
`;

const Name = styled.div`
  padding-top: 37px;
  padding-bottom: 20px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url('https://tmi.nexon.com/img/background_flag_rank.png');
  background-size: cover;
  background-position: 50%;
`;

const Nick = styled.p`
  margin-bottom: 13px;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: #07f;
`;

const Green = styled.span`
  color: green;
  padding-left: 5px;
`;

const CharaterImg = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 180px;
`;

const PercentBox = styled.div`
  display: flex;
  border-top: 1px solid #07f;
  &::after {
    position: absolute;
    content: ' ';
    display: block;
    top: 20px;
    right: 0;
    width: 1px;
    height: 75px;
    background-color: #f2f2f2;
    border: none;
    opacity: 1;
  }
`;

const DountRate = styled.div`
  position: relative;
  padding-top: 10px;
  flex: 1;
  text-align: center;
  p {
    font-size: 12px;
    font-weight: 500;
  }
`;
