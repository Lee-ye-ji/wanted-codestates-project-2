import DountChart from '../chart/DountChart';
import { FaPlusCircle } from 'react-icons/fa';
import Sub from '../common/Sub';
import styled from 'styled-components';

function TopRank() {
  return (
    <Top>
      <Ranker>
        <Medal
          src="https://tmi.nexon.com/img/assets/icon_goldmedal.png"
          alt="1등"
        />
        <Name>
          <Nick>법사케피</Nick>
          <Sub color="black">
            순위
            <span>1위</span>
          </Sub>
          <Sub color="black">
            누적포인트
            <span>6,991PT</span>
            <Green>
              <FaPlusCircle />
              469
            </Green>
          </Sub>
        </Name>
        <CharaterImg
          src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/95de437771bb1e094b4f3ef1c1a81574093a01e8d3be037c5a9fe0834dfbffa0.png"
          alt="profile"
        />
        <PercentBox>
          <DountRate>
            <p>승률</p>
            <DountChart color="#07f" percent={0.65} size="65px" />
          </DountRate>
          <DountRate>
            <p>리타이어율</p>
            <DountChart color="#f62459" percent={0.65} size="65px" />
          </DountRate>
        </PercentBox>
      </Ranker>
      <Ranker></Ranker>
      <Ranker></Ranker>
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
