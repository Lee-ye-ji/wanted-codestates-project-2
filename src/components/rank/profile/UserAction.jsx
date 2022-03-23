import Button from '../../Button';
import { FaRedo, FaBell, FaShareAlt } from 'react-icons/fa';
import styled from 'styled-components';

function UserAction() {
  return (
    <>
      <Button>
        <Redo />
        전적갱신
      </Button>
      <Button>
        <Bell />
        신고하기
      </Button>
      <Button>
        <Share />
        공유하기
      </Button>
    </>
  );
}

export default UserAction;

const Redo = styled(FaRedo)`
  font-size: 10px;
  margin-right: 2px;
`;

const Bell = styled(FaBell)`
  font-size: 10px;
  margin-right: 2px;
`;

const Share = styled(FaShareAlt)`
  font-size: 10px;
  margin-right: 2px;
`;
