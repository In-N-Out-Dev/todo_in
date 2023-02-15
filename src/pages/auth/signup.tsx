import {AuthForm} from '@/components';
import {useAuthForm, useSignUpMutation} from '@/hooks';

function SignUp() {
  const {mutate} = useSignUpMutation();
  const {onSubmit, emailInputRef, passwordInputRef} = useAuthForm(mutate);

  return (
    <AuthForm
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      onSubmit={onSubmit}
      formType={'SIGNUP'}
    />
  );
}

export default SignUp;
