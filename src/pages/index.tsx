import {todoDetailState} from '@/atom';
import {TodoCreateForm, TodoDetail, TodoList} from '@/components';
import {LOCALSTORAGE_KEY} from '@/constants';
import {useModal} from '@/hooks';
import styled from '@emotion/styled';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

export default function Home() {
  const [todo, setTodo] = useRecoilState(todoDetailState);
  const {openModal} = useModal();

  useEffect(() => {
    const todoDetail = window.localStorage.getItem(LOCALSTORAGE_KEY.todoDetail);
    todoDetail && setTodo(JSON.parse(todoDetail));
  }, [setTodo]);

  return (
    <>
      <Button onClick={openModal(<TodoCreateForm />)}>할 일 추가</Button>
      <TodoList />
      {!!todo && <TodoDetail {...todo} />}
    </>
  );
}

const Button = styled.button`
  width: 20%;
  margin-bottom: 16px;
  height: 32px;
`;
