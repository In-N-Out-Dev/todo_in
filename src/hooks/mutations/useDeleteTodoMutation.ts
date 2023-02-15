import {QUERY_KEYS} from '@/constants';
import {deleteTodo} from '@/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useDeleteTodoMutation = (id: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.todos]);
      client.removeQueries([QUERY_KEYS.todos, id]);
    },
  });
};
