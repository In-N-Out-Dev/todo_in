import styled from '@emotion/styled';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <Header>
      <Logo>Todo</Logo>
      <NavBar>
        <Button href={'/'}>홈</Button>
        <Button href={'/auth/login'}>로그인</Button>
      </NavBar>
    </Header>
  );
};

const Header = styled.header``;
const NavBar = styled.nav``;
const Logo = styled.div``;
const Button = styled(Link)``;
