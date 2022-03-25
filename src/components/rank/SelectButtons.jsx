import Button from '../common/Button';
import { FaUsers, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

function SelectButtons() {
  return (
    <Buttons>
      <TeamSelect>
        <ButtonTeam color="bgwhite">
          <PersonIcon /> &nbsp;
          <span>개인전</span>
        </ButtonTeam>
        <Button color="white">
          <TeamIcon /> &nbsp;
          <span>팀전</span>
        </Button>
      </TeamSelect>
      <SpeedSelect>
        <SpeedButton color="bgwhite">통합</SpeedButton>
        <SpeedButton color="white">매빠</SpeedButton>
        <SpeedButton color="white">무부</SpeedButton>
      </SpeedSelect>
    </Buttons>
  );
}

export default SelectButtons;

const Buttons = styled.div`
  position: relative;
  height: 45px;
`;

const TeamSelect = styled.div`
  position: relative;
  top: 20px;
  left: 10px;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 25px;
    right: -12px;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;

const PersonIcon = styled(FaUser)`
  font-size: 11px;
`;
const TeamIcon = styled(FaUsers)`
  font-size: 16px;
  vertical-align: middle;
`;

const ButtonTeam = styled(Button)`
  vertical-align: middle;
  display: inline-block;
  width: 100px;
  height: 25px;
  line-height: 25px;
`;

const SpeedSelect = styled.div`
  position: absolute;
  top: 20px;
  left: 235px;
  display: inline-block;
`;

const SpeedButton = styled(Button)`
  vertical-align: middle;
  display: inline-block;
  width: 36px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
`;
