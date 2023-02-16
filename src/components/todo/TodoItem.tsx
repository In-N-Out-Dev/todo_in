import {useTodoItem} from '@/hooks';
import {TodoType} from '@/types';
import styled from '@emotion/styled';

export const TodoItem = (todo: TodoType) => {
  const {title, content} = todo;
  const {handleTodoDetail} = useTodoItem();

  return (
    <Item onClick={() => handleTodoDetail(todo)}>
      <Col>{title}</Col>
      <Col>{content}</Col>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  height: 32px;
  text-align: center;
  align-items: center;
  vertical-align: middle;
`;

const Col = styled.div`
  width: 50%;
`;
