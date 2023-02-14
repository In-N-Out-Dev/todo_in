import {TodoFormType} from '@/types';
export type TodoType = TodoFormType & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
