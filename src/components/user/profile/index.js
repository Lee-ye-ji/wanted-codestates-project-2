import styled from 'styled-components';
import { AWS_IMG, BACKGROUND_FLAG_W } from '../../../constants/image';
import TeamSelect from './TeamSelect';
import UserAction from './UserAction';
import { FaEye } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile() {
  const { name } = useParams();
  const result = useSelector((state) => state.search.userData);

  return (
    <ProfileStyle>
      <Nick>
        <User>
          <img
            src={`${AWS_IMG}/character/${result.character}.png`}
            alt="character"
          />
        </User>
        <Name>
          <h1>{name}</h1>
          <Area>
            <TeamSelect />
            <UserAction />
          </Area>
        </Name>
        <View>
          <p>
            <FaEye />
            &nbsp; 페이지 뷰
          </p>
          <Num>1,534</Num>
        </View>
      </Nick>
    </ProfileStyle>
  );
}

export default Profile;

const ProfileStyle = styled.div`
  position: relative;
  height: 175px;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url(${BACKGROUND_FLAG_W});
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

const Area = styled.div`
  display: flex;
`;

const User = styled.div`
  width: 160px;
  img {
    width: 160px;
    text-align: center;
    vertical-align: middle;
    object-fit: contain;
    height: 175px;
  }
`;

const Name = styled.div`
  width: 40vw;
  padding-top: 20px;
  margin-left: 20px;
  h1 {
    font-size: 45px;
  }
`;

const View = styled.div`
  position: absolute;
  top: 88px;
  right: 30px;
  margin-top: -23.5px;
  color: ${({ theme }) => theme.color.darkBlue};
  font-weight: 400;
  text-align: center;
  p {
    font-size: 14px;
    padding-left: 20px;
  }
`;

const Num = styled.h5`
  font-size: 20px;
`;
