import {AuthForm} from '@/components';
import {useLoginMutation, useAuthForm} from '@/hooks';

function Login() {
  const {mutate} = useLoginMutation();
  const {onSubmit, emailInputRef, passwordInputRef} = useAuthForm(mutate);

  return (
    <AuthForm
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      onSubmit={onSubmit}
      formType={'LOGIN'}
    />
  );
}

export default Login;
