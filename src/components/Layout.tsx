import React, {ReactNode} from 'react';
import {Container, Navigation} from '@/components';
import styled from '@emotion/styled';

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Navigation />
          {children}
        </Block>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 740px;
  height: 100%;
`;

const Block = styled.div`
  padding: 40px;
  min-height: 690px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
