import styled from 'styled-components';
import Inner from '../components/Inner';
import LeftAnimation from '../components/main/LeftAnimation';
import RightAnimation from '../components/main/RightAnimation';
import SearchForm from '../components/main/SearchForm';
import TextArea from '../components/main/TextArea';
import Menu from '../components/Menu';
import { MAIN_BG } from '../constants/image';

function MainPage() {
  return (
    <ContentMain>
      <Inner>
        <Menu />
        <HomeBanner>
          <TextArea />
          <SearchForm />
        </HomeBanner>
      </Inner>
      <LeftAnimation />
      <RightAnimation />
    </ContentMain>
  );
}
export default MainPage;

const ContentMain = styled.div`
  width: 100%;
  background: #005fcc;
  background-image: url(${MAIN_BG});
  position: relative;
  text-align: center;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  height: 85vh;
`;

const HomeBanner = styled.div`
  display: grid;
  place-items: center;
  padding-top: 200px;
  color: ${({ theme }) => theme.color.white};
`;
