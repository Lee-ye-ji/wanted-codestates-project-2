import Box from '../../common/Box';
import styled from 'styled-components';
import Button from '../../common/Button';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../store/actions/comment';

function Cheering() {
  const commentAll = useSelector((state) => state.comment);
  console.log(commentAll);
  const { name } = useParams();
  const selectComment = commentAll.filter((item) => item.nick === name)[0]
    ?.commentList;
  const [nick, setNick] = useState('');
  const [comment, setComment] = useState('');
  const onNick = useCallback(
    (e) => {
      setNick(e.target.value);
    },
    [setNick],
  );
  const onComment = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [setComment],
  );
  const dispatch = useDispatch();
  const onCheer = () => {
    const text = {
      id: nick,
      comment: comment,
    };
    dispatch(addComment(text, name));
    setNick('');
    setComment('');
  };
  return (
    <Box
      top={
        <>
          <h5>
            <span>응원</span> 한마디
          </h5>
          <p>오늘 {selectComment?.length}개</p>
        </>
      }
      section={
        <Chating>
          <ul>
            {selectComment === undefined ? (
              <li>
                <p>작성된 응원이 없습니다!</p>
              </li>
            ) : (
              selectComment.map((item, idx) => (
                <li key={idx}>
                  <p>{item.id}</p>
                  <Speech>
                    <p>{item.comment}</p>
                  </Speech>
                </li>
              ))
            )}
          </ul>
        </Chating>
      }
      bottom={
        <InputMessage>
          <Nick
            type="text"
            maxlength="5"
            placeholder="닉네임"
            value={nick}
            onChange={onNick}
          />
          <Chat
            placeholder="최대 30자"
            maxlength="30"
            onChange={onComment}
            value={comment}
          />
          <Button color="blue" onClick={onCheer}>
            남기기
          </Button>
        </InputMessage>
      }
    />
  );
}

export default Cheering;

const Chating = styled.div`
  overflow-x: hidden;
  ul {
    li {
      display: flex;
      margin-right: 10px;
      p {
        color: #07f;
        line-height: 53px;
      }
    }
  }
`;

const Speech = styled.div`
  flex: 2.5;
  display: inline-block;
  position: relative;
  margin: 10px;
  border: 1px solid #c3ced5;
  color: #333;
  background: #fff;
  border-radius: 15px;
  font-size: 12px;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -8px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #c3ced5;
    display: block;
    width: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -7px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #fff;
    display: block;
    width: 0;
  }
`;

const InputMessage = styled.div`
  display: flex;
  height: 30px;
`;

const Nick = styled.input`
  flex: 0.8;
  margin-right: 5px;
  vertical-align: middle;
  width: 15%;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const Chat = styled.input`
  flex: 2;
  margin-right: 5px;
  vertical-align: middle;
  width: 60%;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
`;
