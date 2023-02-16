import {EMAIL, PASSWORD} from '@/constants';
import {AuthFormProps} from '@/types';
import styled from '@emotion/styled';
import React from 'react';

export const AuthForm = ({emailInputRef, passwordInputRef, onSubmit, formType}: AuthFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{formType}</Title>
      <Label htmlFor={EMAIL}>
        {EMAIL}
        <Input name={EMAIL} id={EMAIL} ref={emailInputRef} />
      </Label>
      <Label htmlFor={PASSWORD}>
        {PASSWORD}
        <Input name={PASSWORD} id={PASSWORD} ref={passwordInputRef} type={PASSWORD} />
      </Label>
      <Button>{formType}</Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const Title = styled.h2`
  text-align: center;
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
