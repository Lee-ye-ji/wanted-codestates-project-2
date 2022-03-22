import styled from 'styled-components';

function Inner({ children, height, ...rest }) {
  return <InnerStyle {...rest}>{children}</InnerStyle>;
}

export default Inner;

const InnerStyle = styled.div`
  vertical-align: middle;
  position: relative;
  max-width: 55.56em;
  height: ${(props) => props.height};
  margin: auto;
  line-height: ${(props) => props.height};
`;
