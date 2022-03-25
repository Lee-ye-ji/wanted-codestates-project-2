import styled, { keyframes } from 'styled-components';

function Loading() {
  return (
    <Spinner>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </Spinner>
  );
}

export default Loading;

const bounce = keyframes`
   0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  margin-top: 20px;
  text-align: center;
  /* min-width: 300px; */
  width: 100%;
  div {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.blue};

    border-radius: 100%;
    display: inline-block;

    animation: ${bounce} 1.4s infinite ease-in-out both;
  }
  .bounce1 {
    animation-delay: -0.32s;
  }
  .bounce2 {
    animation-delay: -0.16s;
  }
`;
