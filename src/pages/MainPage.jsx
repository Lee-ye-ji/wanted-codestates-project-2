import styled from 'styled-components';
import Inner from '../components/Inner';
import LeftAnimation from '../components/main/LeftAnimation';
import RightAnimation from '../components/main/RightAnimation';
import SearchForm from '../components/main/SearchForm';
import TextArea from '../components/main/TextArea';
import Menu from '../components/Menu';
import storage from '../config/firebase';
import { MAIN_BG } from '../constants/image';

function MainPage() {
  const img = `08fa4bc801c94fcb04552b87519cb3b88f4eefdd4ba95f24585a50be2a1d7045`;
  const result = storage.ref().child('character').listAll();
  // const urlPromises = result?.items.map((imageRef) => imageRef.getDownloadURL());
  console.log(result);
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
      <img
        src={`${process.env.REACT_APP_FIREBASE_URL}character%2F${img}.png?alt=media&token=${process.env.REACT_APP_FIREBASE_TOKEN}`}
        alt="character"
      />
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
  padding-top: 12em;
  color: ${({ theme }) => theme.color.white};
`;
