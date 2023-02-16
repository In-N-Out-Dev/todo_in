import {ReactNode, useEffect} from 'react';
import {Container, Modal, Navigation} from '@/components';
import styled from '@emotion/styled';
import {useModal} from '@/hooks';
import {useRecoilState} from 'recoil';
import {authState} from '@/atom';
import {LOCALSTORAGE_KEY} from '@/constants';

export const Layout = ({children}: {children: ReactNode}) => {
  const {isModalOpened} = useModal();
  const [, setAuthState] = useRecoilState(authState);
  useEffect(() => {
    setAuthState({isLogined: !!window.localStorage.getItem(LOCALSTORAGE_KEY.token)});
  }, [setAuthState]);

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
