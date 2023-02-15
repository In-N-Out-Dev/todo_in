import {QUERY_KEYS} from '@/constants';
import {getTodos} from '@/http';
import {useQuery} from '@tanstack/react-query';

export const useTodoListQuery = () => {
  return useQuery({
    queryFn: getTodos,
    queryKey: [QUERY_KEYS.todos],
  });
};
