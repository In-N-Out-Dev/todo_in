import {EMAIL, PASSWORD} from '@/constants';
import {AuthFormProps} from '@/types';
import styled from '@emotion/styled';
import React from 'react';

export const AuthForm = ({emailInputRef, passwordInputRef, onSubmit, formType}: AuthFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{formType}</Title>
      <Label htmlFor={EMAIL}>
        <Input name={EMAIL} id={EMAIL} ref={emailInputRef} />
      </Label>
      <Label htmlFor={PASSWORD}>
        <Input name={PASSWORD} id={PASSWORD} ref={passwordInputRef} />
      </Label>
      <Button>{formType}</Button>
    </Form>
  );
};

const Title = styled.h2``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button``;
