import {todoDetailState} from '@/atom';
import {LOCALSTORAGE_KEY, QUERY_KEYS} from '@/constants';
import {updateTodo} from '@/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRecoilState} from 'recoil';

export const useUpdateTodoMutation = (id: string) => {
  const client = useQueryClient();
  const [{isOpened}, setTodoDetail] = useRecoilState(todoDetailState);
  return useMutation({
    mutationFn: updateTodo(id),
    onSuccess: todo => {
      client.invalidateQueries([QUERY_KEYS.todos]);
      client.invalidateQueries([QUERY_KEYS.todos, id]);
      window.localStorage.setItem(LOCALSTORAGE_KEY.todoDetail, JSON.stringify(todo));
      setTodoDetail({isOpened, todo});
    },
  });
};
