import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

interface BasicProps {
  children?: ReactNode;
}

const Basic = ({ children }: BasicProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Basic;
