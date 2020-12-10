import React from 'react';

import { Wrapper, Title } from './Header.styled';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>Hello from Header component</Title>
    </Wrapper>
  );
};

export default Header;
