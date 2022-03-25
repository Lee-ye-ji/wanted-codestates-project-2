import { RANK_RESULT, RANK_ADD_RESULT, RANK_SEARCH_RESULT } from './type';
import axios from 'axios';
import dateCalculate from '../../util/dateCalculate';

axios.defaults.baseURL =
  'https://proxy-cors-setting.herokuapp.com/https://api.nexon.co.kr/kart/v1.0';
axios.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_NEXON_TMI_KEY;

const GAME_TYPE_PERSON =
  '7ca6fd44026a2c8f5d939b60aa56b4b1714b9cc2355ec5e317154d4cf0675da0,6f2d79ba8579760af6239ada4fd09c158430625d537676dd0fe07e9934e1d55b,c84b965f5125749735f4c70404f0792248b782b54b2e9356135b7ba35e51e5a6,7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a,56c651b08836f7c513545e61837ee1ff917d10a8bdbd95a09e5ee5ca2024f157,b0da8c192a6e908b871f65527b074a59652e0ad8525936b5cf1755d9d86d50fd,224ab54ee8a63940f4df542524ee4059b94efbd3e8ce94f03707ed39294a0e2e,b73122a1e6559949df183992491d440f00272ebecf9c415ceec8197abb936432,e60946660f964b7aadf47691a6c663cc57b2cf8021761c9183aa1fabea1f8537';

const allMatchApi = async (DATE) => {
  try {
    const res = await axios.get(
      `/matches/all?start_date=${DATE} 00:00:00&
    end_date=${DATE} 24:00:00&offset=0
    &limit=10&match_types=${GAME_TYPE_PERSON}`,
    );
    const data = res.data.matches;
    const newArr = [];
    for (const i in data) {
      newArr.push(...data[i].matches);
    }
    return newArr;
  } catch (err) {
    console.error(err);
  }
};

const detailMatchApi = async (matchId) => {
  try {
    const res = await axios.get(`/matches/${matchId}`);
    const data = res.data.players;
    for (const i in data) {
      const {
        accountNo,
        characterName,
        character,
        rankinggrade2,
        matchRetired,
        matchWin,
        matchTime,
      } = data[i];
      return {
        userId: accountNo,
        nick: characterName,
        img: character,
        rank: rankinggrade2,
        retired: matchRetired,
        win: matchWin,
        time: matchTime,
      };
    }
  } catch (err) {
    console.log(err);
  }
};
// const common = async (num) => {
//   const date = dateCalculate();
//   const allMatch = await allMatchApi(date[num]);

// 오늘 날짜 - 지난 달 날짜 구해서 합산한 결과로 api를 불러올라하였지만
// 너무 많은 request 때문에 불가
// const dateArr = await Promise.all(
//   dateCalculate().map(async (element) => {
//     const allMatch = await allMatchApi(element);
//     return allMatch;
//   }),
// );
// dateArr.flat()
//   const rankingList = await Promise.all(
//     allMatch.map(async (el) => {
//       const matchList = await detailMatchApi(el);
//       return matchList;
//     }),
//   );
//   rankingList.sort((a, b) => {
//     return a.rank - b.rank;
//   });
//   return rankingList;
// };

export const rankResult = async () => {
  const date = dateCalculate();
  const allMatch = await allMatchApi(date[0]);
  const rankingList = await Promise.all(
    allMatch.map(async (el) => {
      const matchList = await detailMatchApi(el);
      return matchList;
    }),
  );
  rankingList.sort((a, b) => {
    return a.rank - b.rank;
  });
  return {
    type: RANK_RESULT,
    rankConfirm: rankingList,
  };
};

export const rankAddResult = async (num) => {
  const date = dateCalculate();
  const allMatch = await allMatchApi(date[num]);
  const rankingList = await Promise.all(
    allMatch.map(async (el) => {
      const matchList = await detailMatchApi(el);
      return matchList;
    }),
  );
  rankingList.sort((a, b) => {
    return a.rank - b.rank;
  });
  return {
    type: RANK_ADD_RESULT,
    rankConfirm: rankingList,
  };
};

export const searchRanck = (name) => {
  return {
    type: RANK_SEARCH_RESULT,
    rankName: name,
  };
};
