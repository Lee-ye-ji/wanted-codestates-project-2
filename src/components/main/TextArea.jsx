import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextArea() {
  return (
    <Area>
      <OpenP>넥슨 오픈API 기반</OpenP>
      <KartP>
        카트라이더 <span>전적</span> 검색
      </KartP>
      <MaincopyButton>사회적거리두기</MaincopyButton>
    </Area>
  );
}

export default TextArea;

const animation = keyframes`
  0% {
    margin-top: -5.56em;
  }
  100% {
    margin-top: 0;
  }
`;

const Area = styled.div`
  animation: ${animation} 0.5s ease-out;
`;

const psize = '28px';
const OpenP = styled.p`
  font-size: ${psize};
  line-height: ${psize};
  font-weight: ${({ theme }) => theme.font.four};
`;

const KartP = styled.p`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.font.four};
  span {
    font-weight: ${({ theme }) => theme.font.six};
  }
`;

const MaincopyButton = styled.button`
  margin-top: 5px;
  display: inline-block;
  width: 280px;
  line-height: 26px;
  background: ${({ theme }) => theme.color.opacity};
  border-radius: 15px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.four};
`;
