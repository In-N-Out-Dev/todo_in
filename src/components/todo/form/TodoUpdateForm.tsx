import {useTodoForm, useUpdateTodoMutation} from '@/hooks';
import {TodoType} from '@/types';
import {useEffect} from 'react';
import {TodoForm} from './TodoForm';

export const TodoUpdateForm = ({id, closeFn, todo}: {closeFn: Function; id: string; todo: TodoType}) => {
  const {mutate} = useUpdateTodoMutation(id);
  const {titleInputRef, contentInputRef, onSubmit} = useTodoForm(mutate, closeFn);
  useEffect(() => {
    if (titleInputRef.current && contentInputRef.current) {
      titleInputRef.current.value = todo.title;
      contentInputRef.current.value = todo.content;
      titleInputRef.current.focus();
    }
  }, [titleInputRef, contentInputRef, todo.title, todo.content]);

  return <TodoForm titleInputRef={titleInputRef} contentInputRef={contentInputRef} onSubmit={onSubmit} />;
};
