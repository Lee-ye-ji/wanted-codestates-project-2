import { SEARCH_RESULT } from './type';
import axios from 'axios';
import storage from '../../config/firebase';

export const searchResult = async (nickname) => {
  const userName = await axios.get(`/users/nickname/${nickname}`, {
    headers: {
      Authorization: process.env.REACT_APP_NEXON_TMI_KEY,
    },
  });
  console.log(userName.data);
  console.log(storage.ref().child('character'));
  return {
    type: SEARCH_RESULT,
    payload: userName.data,
  };
};
