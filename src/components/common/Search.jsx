import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchRanck } from '../../store/actions/rank';
function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSearch = useCallback(
    (e) => {
      setValue(e.target.value);
      dispatch(searchRanck(e.target.value));
    },
    [dispatch],
  );

  return (
    <>
      <Input placeholder="랭커 검색" value={value} onChange={onSearch} />
      <SearchIcon />
    </>
  );
}

export default Search;

const Input = styled.input`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 195px;
  height: 32px;
  background-color: transparent;
  outline: 0;
  border: none;
  color: ${({ theme }) => theme.color.white};
  z-index: 90;
  border-bottom: 1px solid #fff;
  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  font-size: 22px;
  padding-top: 24px;
  right: 20px;
  color: ${({ theme }) => theme.color.white};
`;
