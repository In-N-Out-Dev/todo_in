import {atom} from 'recoil';
import {RECOIL_KEYS} from '../constants/index';
import {TodoType} from '@/types';
import {ReactNode} from 'react';

export const todoDetailState = atom({
  key: RECOIL_KEYS.todo,
  default: {
    isOpened: false,
    todo: <TodoType>{},
  },
});

export const modalState = atom({
  key: RECOIL_KEYS.modal,
  default: {
    modalComponent: <ReactNode | null>null,
    isModalOpened: false,
  },
});
