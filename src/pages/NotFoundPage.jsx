import PageTemplate from '../components/common/PageTemplate';

function NotFoundPage() {
  return (
    <PageTemplate
      mainText="PAGE NOT FOUND"
      subText1="페이지를 찾을 수 없습니다!"
      subText2="메인 화면으로 돌아가주세요!"
      imgsrc="http://img.tf.co.kr/article/home/2020/05/12/202047651589263721.jpg"
    />
  );
}

export default NotFoundPage;
