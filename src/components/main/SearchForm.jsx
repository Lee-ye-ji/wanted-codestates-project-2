import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TMI_LOGO_DEFAULT } from '../../constants/image';
function SearchForm() {
  return (
    <Searchform>
      <form>
        <SelectBox>
          <label for="selectCategory">유저</label>
          <select id="selectCategory">
            <option value="유저">유저</option>
            <option value="카트">카트</option>
            <option value="트랙">트랙</option>
          </select>
        </SelectBox>
        <Input type="search" placeholder="카트바디 이름을 입력" />
        <button>
          <img src={TMI_LOGO_DEFAULT} alt="tmi-button" />
        </button>
      </form>
    </Searchform>
  );
}

export default SearchForm;

const inputWidth = '24em';
const height = '2.44em';
const selectWidth = '5em';

const search = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: ${inputWidth};
    opacity: 1;
  }
`;

const Searchform = styled.div`
  position: absolute;
  top: 125%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s;
  box-sizing: border-box;
  border-radius: 1.86em;
  border: 4px solid #fff;
  padding: 0 0.28em;
  height: 3.72em;
  form {
    display: flex;
    flex-direction: row;
    button {
      border: none;
      background-color: transparent;
      margin: 1em;
    }
  }
`;

const Input = styled.input`
  width: ${inputWidth};
  height: ${height};
  line-height: ${height};
  outline: 0;
  border: 0;
  display: block;
  font-size: 1.33em;
  font-weight: 400;
  padding: 0 1.39em;
  background: transparent;
  color: ${(props) => props.theme.color.white};
  animation: ${search} 0.5s ease-out;
  &::placeholder {
    color: ${(props) => props.theme.color.white};
    opacity: 0.5;
  }
`;

const borderSize = '5px solid';
const SelectBox = styled.div`
  label {
    position: absolute;
    display: block;
    box-sizing: border-box;
    top: 0.39em;
    width: ${selectWidth};
    height: ${height};
    line-height: ${height};
    font-weight: ${({ theme }) => theme.font.four};
    font-size: 1em;
    color: ${({ theme }) => theme.color.white};
    background: transparent;
    z-index: -1;
    border-right: 1px solid ${({ theme }) => theme.color.white};
    padding-left: 0 0.63em;
    &::before {
      content: '';
      position: absolute;
      top: 49%;
      right: 1.5%;
      width: 0;
      height: 0;
      border-left: ${borderSize} transparent;
      border-right: ${borderSize} transparent;
      border-top: ${borderSize} ${({ theme }) => theme.color.white};
      margin-right: 0.63em;
    }
  }
  select {
    width: ${selectWidth};
    height: ${height};
    line-height: ${height};
    font-weight: ${({ theme }) => theme.font.five};
    font-size: 0.88em;
    border: 0;
    opacity: 0;
    appearance: none;
    vertical-align: middle;
    option {
      background-color: transparent;
    }
  }
`;
