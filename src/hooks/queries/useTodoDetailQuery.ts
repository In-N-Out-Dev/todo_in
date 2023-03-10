import {QUERY_KEYS} from '@/constants';
import {getTodoById} from '@/http';
import {useQuery} from '@tanstack/react-query';

export const useTodoDetailQuery = (id: string) => {
  return useQuery({
    queryFn: () => getTodoById(id),
    queryKey: [QUERY_KEYS.todos, id],
  });
};
