import {useDeleteTodoMutation, useModal, useTodoDetailQuery} from '@/hooks';
import {TodoType} from '@/types';
import styled from '@emotion/styled';
import {TodoUpdateForm} from '@/components';

export const TodoDetail = (todo: TodoType) => {
  const {id, title, content, createdAt, updatedAt} = todo;
  useTodoDetailQuery(id);
  const {mutate: mutateDelete} = useDeleteTodoMutation(id);
  const {closeModal, openModal} = useModal();

  const DeleteConfirmComponent = () => (
    <Wrapper>
      <Title>정말 삭제하시겠어요?</Title>
      <ButtonGroup>
        <Button
          onClick={() => {
            mutateDelete();
            closeModal();
          }}
        >
          삭제
        </Button>
        <Button onClick={closeModal}>취소</Button>
      </ButtonGroup>
    </Wrapper>
  );

  const createdDate = new Date(createdAt).toLocaleString();
  const updatedDate = new Date(updatedAt).toLocaleString();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Text>{createdDate}</Text>
      <Text>{updatedDate}</Text>
      <ButtonGroup>
        <Button onClick={openModal(<DeleteConfirmComponent />)}>삭제</Button>
        <Button onClick={openModal(<TodoUpdateForm closeFn={closeModal} id={id} todo={todo} />)}>수정</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  padding: 16px;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
`;

const Text = styled.div`
  min-height: 32px;
`;

const ButtonGroup = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 32px;
  width: 40%;
`;
