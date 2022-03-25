import styled from 'styled-components';

function Box({ top, section, bottom }) {
  return (
    <BoxDiv>
      <Top>{top}</Top>
      <Section>{section}</Section>
      <Bottom>{bottom}</Bottom>
    </BoxDiv>
  );
}

export default Box;

const BoxDiv = styled.div`
  position: relative;
  min-width: 300px;
  flex: 1;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const Top = styled.div`
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  color: #1f334a;
  h5 {
    span {
      margin-right: 5px;
      font-size: 14px;
      color: #07f;
    }
  }
  p {
    position: absolute;
    top: 3px;
    right: 20px;
    font-size: 11px;
    font-weight: 500;
    span {
      color: ${({ theme }) => theme.color.blue};
      margin-left: 2px;
    }
  }
`;

const Section = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  height: 150px;
`;

const Bottom = styled.div`
  position: relative;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
`;
