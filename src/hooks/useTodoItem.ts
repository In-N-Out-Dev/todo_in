import {todoDetailState} from '@/atom';
import {LOCALSTORAGE_KEY} from '@/constants';
import {TodoType} from '@/types';
import {useRecoilState} from 'recoil';

export const useTodoItem = () => {
  const [{isOpened, todo: prevTodo}, setTodoDetail] = useRecoilState(todoDetailState);

  const handleTodoDetail = (todo: TodoType) => {
    if (prevTodo?.id === todo.id) {
      setTodoDetail({isOpened: false, todo: {content: '', createdAt: '', id: '', title: '', updatedAt: ''}});
      window.localStorage.removeItem(LOCALSTORAGE_KEY.todoDetail);
      return;
    }
    window.localStorage.setItem(LOCALSTORAGE_KEY.todoDetail, JSON.stringify(todo));
    if (!isOpened || !prevTodo) {
      setTodoDetail({todo, isOpened: true});
      return;
    }
    setTodoDetail({isOpened, todo});
  };

  return {handleTodoDetail};
};
