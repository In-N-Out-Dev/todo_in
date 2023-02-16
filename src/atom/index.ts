import {atom} from 'recoil';
import {RECOIL_KEYS} from '@/constants';
import {TodoType} from '@/types';
import {ReactNode} from 'react';

export const todoDetailState = atom({
  key: RECOIL_KEYS.todo,
  default: <TodoType | null>null,
});

export const modalState = atom({
  key: RECOIL_KEYS.modal,
  default: {
    modalComponent: <ReactNode | null>null,
    isModalOpened: false,
  },
});

export const authState = atom({
  key: RECOIL_KEYS.auth,
  default: {isLogined: false},
});
