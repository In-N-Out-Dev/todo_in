import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;
