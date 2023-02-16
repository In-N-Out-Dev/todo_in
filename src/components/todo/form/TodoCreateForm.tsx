import {useCreateTodoMutation, useTodoForm} from '@/hooks';
import React from 'react';
import {TodoForm} from './TodoForm';

export const TodoCreateForm = ({closeFn}: {closeFn?: Function}) => {
  const {mutate} = useCreateTodoMutation();
  const {titleInputRef, contentInputRef, onSubmit} = useTodoForm(mutate);

  return <TodoForm titleInputRef={titleInputRef} contentInputRef={contentInputRef} onSubmit={onSubmit} />;
};
