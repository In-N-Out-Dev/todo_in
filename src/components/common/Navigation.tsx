import styled from '@emotion/styled';
import Link from 'next/link';
import {LOCALSTORAGE_KEY, ROUTES, QUERY_KEYS} from '@/constants';
import {useRecoilState} from 'recoil';
import {todoDetailState, authState} from '@/atom';
import {useQueryClient} from '@tanstack/react-query';

export const Navigation = () => {
  const client = useQueryClient();
  const [{isLogined}, setAuthState] = useRecoilState(authState);
  const [, setTodoDetail] = useRecoilState(todoDetailState);

  const onClickLogout = () => {
    window.localStorage.removeItem(LOCALSTORAGE_KEY.token);
    window.localStorage.removeItem(LOCALSTORAGE_KEY.todoDetail);
    client.removeQueries([QUERY_KEYS.todos]);
    setTodoDetail(null);
    setAuthState({isLogined: false});
  };

  return (
    <Header>
      <Link href={ROUTES.home}>
        <Logo>Todo App</Logo>
      </Link>
      <NavBar>
        <Button href={ROUTES.home}>홈</Button>
        {isLogined ? (
          <Button href={ROUTES.login} onClick={onClickLogout}>
            로그아웃
          </Button>
        ) : (
          <Button href={ROUTES.login}>로그인</Button>
        )}
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
