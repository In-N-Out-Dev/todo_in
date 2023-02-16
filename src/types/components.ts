import {FormEvent, RefObject} from 'react';

export type AuthFormProps = {
  emailInputRef: RefObject<HTMLInputElement>;
  passwordInputRef: RefObject<HTMLInputElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formType: 'LOGIN' | 'SIGNUP';
};

export type TodoFormProps = {
  titleInputRef: RefObject<HTMLInputElement>;
  contentInputRef: RefObject<HTMLInputElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
