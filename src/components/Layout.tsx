import {ReactNode} from 'react';
import {Container, Modal, Navigation} from '@/components';
import styled from '@emotion/styled';
import {useModal} from '@/hooks';

export const Layout = ({children}: {children: ReactNode}) => {
  const {isModalOpened} = useModal();

  return (
    <>
      <Container>
        <Wrapper>
          <Block>
            <Navigation />
            {children}
          </Block>
        </Wrapper>
      </Container>
      {isModalOpened && <Modal />}
    </>
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
