import {authState} from '@/atom';
import {ROUTES, LOCALSTORAGE_KEY} from '@/constants';
import {postSignUp} from '@/http';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import {useRecoilState} from 'recoil';

export const useSignUpMutation = () => {
  const router = useRouter();
  const [, setAuthState] = useRecoilState(authState);
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: data => {
      const token = data.token;
      if (token) {
        window.localStorage.setItem(LOCALSTORAGE_KEY.token, token);
        setAuthState({isLogined: true});
        router.replace(ROUTES.home);
        return;
      }
    },
  });
};
