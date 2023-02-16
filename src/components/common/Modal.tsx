import styled from '@emotion/styled';
import React from 'react';
import {useModal} from '@/hooks';

export const Modal = () => {
  const {closeModal, modalComponent} = useModal();

  return (
    <ModalWindow>
      <ModalContent>{modalComponent}</ModalContent>
      <Wrapper onClick={closeModal} />
    </ModalWindow>
  );
};

const Wrapper = styled.div`
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9990;
`;

const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9991;
`;

const ModalContent = styled.div`
  z-index: 9991;
  background-color: white;
  border-radius: 4px;
  width: 30vw;
`;
