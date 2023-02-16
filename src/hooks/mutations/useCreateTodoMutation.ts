import {QUERY_KEYS} from '@/constants';
import {createTodo} from '@/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useCreateTodoMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.todos]);
    },
  });
};
