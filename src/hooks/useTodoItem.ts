import {todoDetailState} from '@/atom';
import {LOCALSTORAGE_KEY} from '@/constants';
import {TodoType} from '@/types';
import {useRecoilState} from 'recoil';

export const useTodoItem = () => {
  const [prevTodo, setTodoDetail] = useRecoilState(todoDetailState);

  const handleTodoDetail = (todo: TodoType) => {
    if (prevTodo?.id === todo.id) {
      setTodoDetail(null);
      window.localStorage.removeItem(LOCALSTORAGE_KEY.todoDetail);
      return;
    }
    window.localStorage.setItem(LOCALSTORAGE_KEY.todoDetail, JSON.stringify(todo));
    if (!prevTodo) {
      setTodoDetail(todo);
      return;
    }
    setTodoDetail(todo);
  };

  return {handleTodoDetail};
};
