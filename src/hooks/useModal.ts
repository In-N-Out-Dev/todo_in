import {modalState} from '@/atom';
import {ReactNode} from 'react';
import {useRecoilState} from 'recoil';

export const useModal = () => {
  const [{modalComponent, isModalOpened}, setModalState] = useRecoilState(modalState);

  const openModal = (component: ReactNode) => () => {
    setModalState({isModalOpened: true, modalComponent: component});
  };

  const closeModal = () => {
    setModalState({isModalOpened: false, modalComponent: null});
  };

  return {openModal, closeModal, modalComponent, isModalOpened};
};
