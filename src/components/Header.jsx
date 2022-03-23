import { BiCaretDown } from 'react-icons/bi';
import Inner from './Inner';
import styled from 'styled-components';
import { LOGO_KART, TMI_LOGO_DEFAULT_B } from '../constants/image';

function Header() {
  return (
    <HeaderStyle>
      <Inner>
        <KartLogo>
          <Img src={LOGO_KART} alt="logo_kart" />
          <BiCaretDown />
        </KartLogo>
        <Img src={TMI_LOGO_DEFAULT_B} alt="tmi_logo_default" />
        <Home>카트라이더 홈페이지 바로가기</Home>
      </Inner>
    </HeaderStyle>
  );
}

export default Header;

const height = '48px';
const HeaderStyle = styled.header`
  vertical-align: middle;
  position: relative;
  height: ${height};
  margin: auto;
  line-height: ${height};
`;

const KartLogo = styled.span`
  cursor: pointer;
  color: #ccc;
  padding: 14px 0;
  &:hover {
    background-color: #e4e4e4;
  }
`;

const Img = styled.img`
  vertical-align: middle;
  margin: 5px;
  cursor: pointer;
`;

const Home = styled.span`
  position: absolute;
  right: 0;
  color: #6c7a89;
  cursor: pointer;
`;
