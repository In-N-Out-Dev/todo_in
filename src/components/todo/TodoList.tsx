import {TodoItem} from './TodoItem';
import {useTodoListQuery} from '@/hooks';
import styled from '@emotion/styled';

export const TodoList = () => {
  const {data} = useTodoListQuery();

  return (
    <List>
      <ListHead>
        <Col>제목</Col>
        <Col>내용</Col>
      </ListHead>
      {data?.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: table;
  width: 100%;
  margin: 0 auto;
`;

const ListHead = styled.li`
  display: flex;
  border: 1px solid black;
  height: 32px;
  align-items: center;
  text-align: center;
`;

const Col = styled.div`
  width: 50%;
`;
