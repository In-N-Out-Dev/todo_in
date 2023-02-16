import {authState} from '@/atom';
import {LOCALSTORAGE_KEY, ROUTES} from '@/constants';
import {postLogin} from '@/http';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import {useRecoilState} from 'recoil';

export const useLoginMutation = () => {
  const router = useRouter();
  const [, setAuthState] = useRecoilState(authState);
  return useMutation({
    mutationFn: postLogin,
    onSuccess: data => {
      console.log(data);
      const token = data.token;
      if (token) {
        window.localStorage.setItem(LOCALSTORAGE_KEY.token, token);
        setAuthState({isLogined: true});
        router.replace(ROUTES.home);
        return;
      }
      alert(data);
    },
    onError: err => {
      console.error('error', err);
    },
  });
};
