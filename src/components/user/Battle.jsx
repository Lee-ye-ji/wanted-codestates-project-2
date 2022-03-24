import styled, { keyframes } from 'styled-components';
import Button from '../common/Button';
import { FaCalculator } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function Battle() {
  const { name } = useParams();
  return (
    <Gradient>
      1대1 매칭 시뮬레이터 - '{name}' 와 가상 대결을 펼쳐보세요.
      <Button white>
        <Calculator />
        매칭하기
      </Button>
    </Gradient>
  );
}

export default Battle;

const Calculator = styled(FaCalculator)`
  margin-right: 5px;
`;

const gradientBG = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Gradient = styled.div`
  position: relative;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientBG} 20s ease infinite;
  color: ${({ theme }) => theme.color.white};
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  button {
    margin-top: 10px;
  }
`;
