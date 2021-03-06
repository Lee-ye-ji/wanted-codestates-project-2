import { SEARCH_RESULT, SEARCH_SCROLL } from './type';
import axios from 'axios';

axios.defaults.baseURL =
  'https://proxy-cors-setting.herokuapp.com/https://api.nexon.co.kr/kart/v1.0';
axios.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_NEXON_TMI_KEY;

const userNameApi = async (nickname) =>
  axios.get(`/users/nickname/${nickname}`).then((res) => res.data.accessId);

const userDataApi = async (nickId, page) =>
  axios
    .get(
      `/users/${nickId}/matches?start_date=&end_date= &offset=0&limit=${page}&match_types=`,
    )
    .then((res) => res.data.matches[0].matches);

export const searchResult = async (nickname) => {
  const nickId = await userNameApi(nickname);
  const userList = await userDataApi(nickId, 10);
  return {
    type: SEARCH_RESULT,
    userList: userList,
  };
};

export const scrollResult = async (nickname, page) => {
  const nickId = await userNameApi(nickname);
  const userList = await userDataApi(nickId, page);
  return {
    type: SEARCH_SCROLL,
    userList: userList,
  };
};
