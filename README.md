# wanted-codestates-project-2

[카트라이더 OpenAPI](https://developers.nexon.com/kart)를 이용한 [카트라이더 TMI(전적 검색 사이트)](https://tmi.nexon.com/kart) 개발

## 프로젝트 실행 방법

### 배포
[🏎 카트라이더 전적 검색 - TMI 🏎 ![image](https://user-images.githubusercontent.com/59958929/160231992-c7cd334c-db83-4c19-8073-b2b37d9d4651.png)](https://wanted-codestates-project-nexon.netlify.app/)
### 로컬 
1. `git clone https://github.com/Lee-ye-ji/wanted-codestates-project-2.git`
2. `yarn install`
3. `yarn run start`

## 구현한 기능 목록
- 필수 : [개인 전적 조회 페이지]
- 선택 : [랭킹 페이지]

## 사용한 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/Redux-7248B6.svg?&style=for-the-badge&logo=Redux&logoColor=fff"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=StyledComponents&logoColor=fff"/>
## 프로젝트 구조
```
--📁 src
  ---📂 components ➡ 컴포넌트 폴더
    ---  📂 chart - 그래프를 담은 폴더(도넛 차트, 라인 차트)
    ---  📂 commons -  공통적으로 사용하는 컴포넌트를 담은 폴더
    ---  📂 main - 메인페이지에서 사용되는 컴포넌트 폴더
    ---  📂 rank - 랭킹 페이지에서 사용되는 컴포넌트 폴더
    ---  📂 user - 개인 유저 페이지에서 사용되는 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더(이미지 경로를 담은 폴더)
  ---📁 hooks ➡ custom hooks 폴더
     ---  📄 useAverage.js - 평균을 구해주는 파일(승률, 완주율, 리타이어율...)
     ---  📄 useIntersect.js - 무한 스크롤 파일(IntersectionObserver)
     ---  📄 useLine.js - 라인 차트 시 해당 그래프의 선을 나타내는 파일 
     ---  📄 useRank.js - 라인 차트 시 해당 그래프의 순위를 나타내는 파일 
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 store ➡ redux를 이용하여 전역 관리한 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
  ---📁 utils ➡ 알맞은 데이터로 출력해주는 함수들을 담은 폴더
    ---  📄 dateCalculate.js - 현재 날짜와 한달 전의 날짜 사이의 모든 날짜 구하는 함수
    ---  📄 dateFormat.js - 해당 날짜를 YYYY-MM-DD 형식으로 날짜 출력하는 함수
    ---  📄 hourAgo.js - 매치 시간과 현재 시간을 비교해 몇 시간 전, 몇 분 전으로 출력해주는 함수
    ---  📄 kartName.js - 해당 카트 아이디에 알맞은 카트 이름으로 변경해주는 함수
    ---  📄 trackName.js - 해당 트랙 아이디에 알맞은 트랙 이름으로 변경해주는 함수
    ---  📄 matchTime.js - 매치 시간 기록을 1'09'31 형식으로 출력하는 함수
```
## 그래프
|  도넛 차트     | 라인차트      |
|---------------------|-----------------------------|
|  ![image](https://user-images.githubusercontent.com/59958929/160246849-1e3278ae-6e32-4b98-8b30-6c8321d5a11f.png)    | ![image](https://user-images.githubusercontent.com/59958929/160246416-061a213b-c068-4572-bce8-71321460a064.png)     |

두 차트 모두 라이브러리 없이 svg로 구현한 그래프들 입니다.
모든 경기에 대한 데이터를 알아온 뒤에 해당 데이터를 바꾸고 출력하는 과정이 오래걸릴 것 같아서 지난 10경기를 기준으로 해당 데이터를 가공해서 출력하였습니다. <br/>

🍩 **도넛 차트** <br/>
svg의 circle을 이용하여 차트를 구현하였습니다. 도넛차트는 userPage와 rankPage 두 곳에서 사용하기 때문에 변경되는 데이터에 알맞게 출력할 수 있도록 재사용성을 중점으로 코드를 작성하였습니다. 데이터 뿐만이 아니라 색, 크기도 달라지기에 props로 해당되는 값들을 받아서 적용시킬 수 있도록 구성하였습니다. 또한 도넛차트에서 값을 구현하기 위해서는 해당 데이터의 값이 75%이면, 전체 원의 코드 공식인 `2 πr`에 `0.75`를 곱해주어야합니다. 그래서 `stroke-dasharray`을 사용하여 해당 값을 나타내어주었습니다. 하지만 circle에서 stroke가 3시 방향부터 시작하기에 회전을 시켜주기 위해서 `transform의 rotate`를 이용하여 구현하려고 하였지만, 3개의 도넛 차트가 모두 제각각으로 위치가 표현되었습니다.
하지만 아래와 같은 글을 보게 되어서 `stroke-dasharray`와 `stroke-dashoffset`을 이용하여 차트를 구현할 수 있었습니다.
>  svg에서 도형을 회전시키기 위한 방법으로 stroke-dasharray와 stroke-dashoffset 속성을 활용할 수 있는데, stroke-dasharray 속성으로 먼저 패턴을 정의하고, stroke-dashoffset 속성을 이용해서 패턴에서 화면에 보이는 영역을 조정하는 방식입니다.
즉,  `stroke-dasharray: 데이터 값 점선 간격`, `stroke-dashoffset: 시작점`을 나타냅니다.

📈 **라인 차트** <br/>
라인 차트 또한 svg를 이용하여 구현하였습니다. 선을 나타내는 부분은 line, 순위를 나타내는 점은 circle태그를 이용하였습니다. x,y 그 뒤에 나타날 x1,y1을 이용하여 해당 수치를 구현하였고, 점 또한 나타낸 데이터를 바탕으로 위에 출력될 수 있도록 구현하였습니다.


## 애니메이션 효과

|  배찌와 다오 애니메이션 효과     | Spinner 애니메이션 및 파도 애니메이션      |
|---------------------|-----------------------------|
|  ![ezgif com-gif-maker (51)](https://user-images.githubusercontent.com/59958929/160235581-1bf3efa8-e1f2-47c7-ac13-cc055c7a4132.gif)    | ![ezgif com-gif-maker (53)](https://user-images.githubusercontent.com/59958929/160236065-7fae4e5a-dae1-4d04-a0b1-a7eacc300f86.gif)     |

🔷 **배찌와 다오 애니메이션** <br/>
개발 시에 Left Animation과 Right Animation으로 나누어서 keyframe을 이용하여 0%일때는 margin값을 -로 100%일 때는 0%로 두었습니다. 또한 검색하는 input 박스는 처음에는 width가 0과 opacity를 0으로 두고 100%일때에는 해당 width값과 opacity를 1로 두어 서서히 보여지는 효과를 넣었습니다. 그외의 텍스트는 위에서 아래로 이동하는 효과를 넣었습니다. 

🔷 **Spinner 애니메이션 및 파도 애니메이션**
- ➰ **Spinner 애니메이션 구현** <br/>
svg의 circle을 이용하여 구현하였습니다. keyframe의 %마다 색상을 다르게 넣어서 해당 컬러가 바뀔 수 있도록 구현하였습니다. 또한 size 값을 props로 두어서 해당 컴포넌트를 크기에 맞게 재사용성 할 수 있도록 개발하였습니다.
- 🌊 **파도 애니매이션 구현** <br/>
TMI 넥슨 페이지의 소스 코드를 참고하여 구현하였습니다. [파도 사진](https://tmi.nexon.com/img/background_wave.svg)을 움직이게 애니매이션 효과를 주기 위해서는 하나는 위에서 아래로 또 다른 하나는 아래에서 위로 이동할 수 있도록 `transform`의 `translate3d`를 이용하였습니다. y축을 움직이기 위해서 가운데의 수를 변경해주었습니다. 또한 동적으로 움직이는 효과를 주기 위해 `margin-left`의 사이즈를 변경하여 시각적으로 효과를 주었습니다.

|  도넛 차트 애니메이션     | 로딩 애니메이션    |
|---------------------|-----------------------------|
|  ![ezgif com-gif-maker (54)](https://user-images.githubusercontent.com/59958929/160238383-6dd818e2-ba7c-484f-8ab9-cd325bb2efa4.gif)     | ![ezgif com-gif-maker (55)](https://user-images.githubusercontent.com/59958929/160238334-2f7dcbda-f96c-4e23-bcee-76782d5a54d7.gif) |

🔷 **도넛 차트 애니메이션** <br/>
차트의 데이터 수치에 맞게 해당 수치가 자연스럽게 채워지는 애니메이션을 구현하였습니다. `stroke-dasharray` 속성을 이용하여 `0 ${2 * Math.PI * 90};`만큼의 크기를 주었습니다. 여기서 `2 * Math.PI * 90`은 원의 둘레를 나타냅니다(2𝝿r) r은 svg를 나타내는 길이인 90으로 사용되어져서 해당 수치를 곱해주었습니다.

🔷 **로딩 애니메이션** <br/>
데이터가 불러오기 전에 해당 데이터가 준비 중임을 알리기 위해 사용하였습니다. 점 3개를 div를 이용하여 코드를 작성하였습니다. `border-radius: 100%;`로 동그라미를 구현해주었습니다. 또한 `transform: scale(숫자);`을 이용하여 해당 점들이 커질 수 있게 구현하였습니다. 각각 3개가 순서에 맞게 커져야하므로 `animation-delay`를 사용하여 애니메이션 진행 속도를 다르게 주었습니다.

|  DownSpin 애니메이션     | Pop Up 애니메이션    |
|---------------------|-----------------------------|
|  ![ezgif com-gif-maker (56)](https://user-images.githubusercontent.com/59958929/160238845-0f6d010c-5833-4f22-9311-0f76766405a1.gif)     | ![ezgif com-gif-maker (57)](https://user-images.githubusercontent.com/59958929/160238852-75a1dfa9-2fac-48f0-9fbe-f4388af7617d.gif) |

🔷 **Down Spin 애니메이션** <br/>
페이지 구현이 되지 않은 카트 페이지, 트랙 페이지 또는 잘못된 URL 들어올 경우 나타나는 페이지를 구성하기 위해 `PageTemplate` 컴포넌트를 구성하였습니다. 해당 페이지를 어떻게 나타나면 좋을까 생각을 하다가 자료조사를 하다가 [DownSpin애니메이션](https://codepen.io/simurai/pen/AeydmX) 코드를 보고 이 코드를 리팩토링하여 카트 밑에 구현하는 게 좋겠다는 생각이 들었습니다. 리팩토링하면서 겪었던 오류 중에 하나는 해당 코드를 적용하니 두 개의 원이 일치되어 나오는 것이 아니라 다르게 나오는 것을 확인하였습니다. 해당 코드에서는 $기호를 이용하여 변수를 이용하였지만, const로 적용하니깐 부분이 적용되지 않는다는 사실을 알게 되었습니다. 그 후 페이지에 알맞게 수치를 변경하며 변수의 숫자를 이용하여 적용해주었습니다. 또한 해당 코드를 분석하면서 새롭게 알게 된 사실은 `transform: perspective(400px) rotateX(66deg);`을 이용하여 원을 눕히는 효과도 알 수 있었습니다.

🔷 **Pop Up 애니메이션** <br/>
검색 시 일치하는 유저의 정보가 없을 시에 나타내주는 부분으로 keyframe의 top을 이용하여 해당 메시지를 알릴 때에는 위에서 아래로, 메시지가 사라질 때에는 아래에서 위로 이동하는 효과를 주었습니다. 또한 메시지가 사라지고 나타내기 위해서는 opacity를 이용하여 구현하였습니다.


## 그 외의 구현한 방법
반복되는 부분을 줄이고자 노력하였습니다. 자주 사용되는 Button을 컴포넌트화하여 색상을 Props로 받아서 구현하였습니다. <br/>
![image](https://user-images.githubusercontent.com/59958929/160248769-a6145c38-1fe7-4fc2-a94d-e213f4677109.png)
![image](https://user-images.githubusercontent.com/59958929/160248776-18247738-c69a-4ee4-bcb1-8f284a4c3bdc.png)

```js
function Button({ children, color, ...rest }) {
  return (
    <ButtonStyle color={color} {...rest}>
      {children}
    </ButtonStyle>
  );
}
...
 ${({ color }) =>
    color === 'navy' &&
    css`
      background: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
    `}
...
```


## 어려웠던 점
데이터 가공하는 부분이 어려웠습니다. Rank Page에 해당되는 데이터를 만들 때 Open API만으로 해당하는 데이터를 만들기 위해서 여러 API를 조합해야한다는 사실을 알게 되었습니다. 그리하여 좀 더 괜찮은 방법이 없을까 고민하다가 해당 페이지를 크롤링하여 데이터를 가져오는 방법으로 구현하고자 시도했었습니다. 하지만 해당 태그를 찾는 부분에서 어려움을 겪었었고, 과제를 구현을 하기 위해서 시간을 더 이상 허비할 수 없어서 제 기준으로 랭킹 페이지의 데이터를 만들자 생각하였습니다. 오늘 날짜를 기준으로 한달 전의 날짜를 구해서 그 안에 속한 날짜들을 구해서 해당 api를 요청한 뒤에 순위를 매겨야겠다고 결심하였습니다. 그리하여 오늘날짜와 한달 전 날짜를 구하는 코드를 아래와 같이 작성하였습니다.
```js
  const today = new Date();
  const monthAgo = new Date(today);
  monthAgo.setMonth(today.getMonth() - 1);
```
그 후에 날짜와 날짜 사이의 날짜들을 구하기 위해 아래와 같은 코드를 발견하게 되었고, 그 코드를 적용시키기 위해서 날짜 형식을 포맷팅해주어야했습니다. 또한 오픈 API의 start_date와 end_date의 값도 2022-03-27과 같은 형식으로 코드를 작성해주어야 했기에 년도, 월, 날짜를 구해서 포맷팅을 해주었습니다.  <br/>
#### [날짜와 날짜 사이 모든 날짜 구하기]
```js
const getDatesStartToLast = (startDate, lastDate) => {
  const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!(regex.test(startDate) && regex.test(lastDate)))
    return 'Not Date Format';
  const result = [];
  const curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
};
```
#### [YYYY-MM-DD 형식으로 날짜 출력]
```
const format = (today) => {
  const year = today.getFullYear(); //년도
  const month = ('0' + (1 + today.getMonth())).slice(-2); //  월
  const day = ('0' + today.getDate()).slice(-2); // 날짜

  return year + '-' + month + '-' + day;
};
```
이제 보내줄 데이터에 대한 준비를 마치고 난 후 날짜와 날짜 사이 모든 날짜의 배열을 이용하여 api를 요청하여 해당 데이터를 가공하려고 노력하였습니다. 하지만 너무 많은 request 때문에 불가능하였고, 계산하는 과정 또한 역시 많이 걸릴 것 같기 때문에 방법을 변경해야만 했습니다. 날짜들을 한달 전 날짜부터 시작하여 하나씩 순서대로 보낸 후, 모든 매치에 대한 리스트 값을 받습니다. 그 후에 그 값을 활용하여 자세한 매치에 대한 결과를 얻기위해 `/matches/${matchId}`의 api를 보내주었고, 화면에 뿌려줄 데이터를 가지고 와서 순위를 필터링해주었습니다. 그 뒤에 무한 스크롤에 대한 이벤트가 발생할 때마다 그 다음 날짜에 해당되는 부분의 api로 가지고 와서 전의 데이터와 합치도록 구현하였습니다. 그렇기 때문에 이 방법은 한달 간의 데이터로 가공하여 순위를 나타내는 방법은 아니지만 최선의 방법으로 구현하기 위해 노력하였습니다.


