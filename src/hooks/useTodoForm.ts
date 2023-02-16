import {TodoFormType, TodoType} from '@/types';
import {UseMutateFunction} from '@tanstack/react-query';
import {FormEvent, useRef} from 'react';

export const useTodoForm = (mutate: UseMutateFunction<TodoType, unknown, TodoFormType>, closeFn?: Function) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleInputRef.current && contentInputRef.current) {
      const title = titleInputRef.current.value;
      const content = contentInputRef.current.value;
      console.log(title, content);
      mutate({title, content});
      titleInputRef.current.value = '';
      contentInputRef.current.value = '';
      titleInputRef.current.focus();
      closeFn && closeFn();
    }
  };
  return {titleInputRef, contentInputRef, onSubmit};
};
