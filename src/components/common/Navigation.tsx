import styled from '@emotion/styled';
import Link from 'next/link';
import {ROUTES} from '@/constants';

export const Navigation = () => {
  return (
    <Header>
      <Link href={ROUTES.home}>
        <Logo>Todo App</Logo>
      </Link>
      <NavBar>
        <Button href={ROUTES.home}>홈</Button>
        <Button href={ROUTES.login}>로그인</Button>
      </NavBar>
    </Header>
  );
};

const Header = styled.header``;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
`;
const Logo = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const Button = styled(Link)``;
