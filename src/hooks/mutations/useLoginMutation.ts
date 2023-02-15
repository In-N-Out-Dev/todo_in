import {ROUTES, TOKEN} from '@/constants';
import {postLogin} from '@/http';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/router';

export const useLoginMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: data => {
      const token = data.token;
      window.localStorage.setItem(TOKEN, token);
      router.replace(ROUTES.home);
    },
  });
};
