import {todoDetailState} from '@/atom';
import {QUERY_KEYS, LOCALSTORAGE_KEY} from '@/constants';
import {deleteTodo} from '@/http';
import {TodoType} from '@/types';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRecoilState} from 'recoil';

export const useDeleteTodoMutation = (id: string) => {
  const client = useQueryClient();
  const [, setTodoDetail] = useRecoilState(todoDetailState);
  return useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.todos]);
      client.removeQueries([QUERY_KEYS.todos, id]);
      window.localStorage.removeItem(LOCALSTORAGE_KEY.todoDetail);
      setTodoDetail({isOpened: false, todo: <TodoType>{}});
    },
  });
};
