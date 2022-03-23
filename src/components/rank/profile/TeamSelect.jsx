import { FaUsers, FaUser } from 'react-icons/fa';
import styled, { css } from 'styled-components';

function TeamSelect() {
  return (
    <Select>
      <ButtonTeam blue>
        <PersonIcon />
        <span>개인전</span>
      </ButtonTeam>
      <ButtonTeam>
        <TeamIcon />
        <span>팀전</span>
      </ButtonTeam>
    </Select>
  );
}

export default TeamSelect;

const Select = styled.div`
  margin-top: 20px;
  padding-right: 10px;
`;

const PersonIcon = styled(FaUser)`
  font-size: 11px;
`;

const TeamIcon = styled(FaUsers)`
  font-size: 16px;
  vertical-align: middle;
`;

const ButtonTeam = styled.button`
  vertical-align: middle;
  width: 100px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.blue};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.blue};
  font-weight: 900;
  span {
    padding: 0 0.5em;
  }
  ${(props) =>
    props.blue &&
    css`
      background: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
    `}
`;
