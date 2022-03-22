import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

function Search() {
  return (
    <SearchBox>
      <Input type="text" placeholder="랭커 검색" />
      <SearchIcon />
    </SearchBox>
  );
}

export default Search;

const SearchBox = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 195px;
  height: 32px;
  color: #fff;
  border-bottom: 1px solid #fff;
  transition: 0.3s ease;
  opacity: 0.5;
`;
const Input = styled.input`
  background-color: transparent;
  outline: 0;
  border: none;
  font-size: 12px;
  &::placeholder {
    color: #fff;
  }
`;

const SearchIcon = styled(BiSearch)`
  font-size: 16px;
  padding-top: 5px;
`;
