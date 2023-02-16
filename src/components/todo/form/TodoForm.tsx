import styled from '@emotion/styled';
import {TodoFormProps} from '@/types';

export const TodoForm = ({titleInputRef, contentInputRef, onSubmit}: TodoFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Title
        <Input name="title" ref={titleInputRef} />
      </Label>
      <Label>
        Content
        <Input name="content" ref={contentInputRef} />
      </Label>
      <Button>제출</Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 32px;
`;
const Button = styled.button`
  height: 32px;
`;
