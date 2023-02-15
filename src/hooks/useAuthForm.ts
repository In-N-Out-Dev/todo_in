import {LoginFormType} from '@/types';
import {UseMutateFunction} from '@tanstack/react-query';
import {FormEvent, useRef} from 'react';

export const useAuthForm = (mutate: UseMutateFunction<any, unknown, LoginFormType>) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInputRef.current && passwordInputRef.current) {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      mutate({email, password});
    }
  };
  return {emailInputRef, passwordInputRef, onSubmit};
};
