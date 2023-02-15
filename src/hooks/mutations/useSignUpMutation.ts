import {ROUTES, TOKEN} from '@/constants';
import {postSignUp} from '@/http';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/router';

export const useSignUpMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: data => {
      const token = data.token;
      window.localStorage.setItem(TOKEN, token);
      router.replace(ROUTES.home);
    },
  });
};
