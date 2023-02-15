import {QUERY_KEYS} from '@/constants';
import {updateTodo} from '@/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useCreateTodoMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.todos]);
    },
  });
};
