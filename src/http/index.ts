import {API_ENDPOINTS, LOCALSTORAGE_KEY} from '@/constants';
import {LoginFormType, TodoFormType, TodoType} from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_HOST;

const apiInstance = (url: string, option?: RequestInit) => fetch(BASE_URL + url, option);

const getToken = () => localStorage.getItem(LOCALSTORAGE_KEY.token);

const postLogin = (form: LoginFormType) =>
  apiInstance(API_ENDPOINTS.login, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(form),
  }).then(res => res.json());

const postSignUp = (form: LoginFormType) =>
  apiInstance(API_ENDPOINTS.signup, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(form),
  }).then(res => res.json());

const getTodos = () => {
  const token = getToken();
  if (token) {
    return apiInstance(API_ENDPOINTS.todos, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then<TodoType[]>(({data}) => data);
  }
};

const getTodoById = (id: string) => {
  const token = getToken();
  if (token) {
    return apiInstance(API_ENDPOINTS.todos + `/${id}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then<TodoType>(({data}) => data);
  }
};

const createTodo = (form: TodoFormType) => {
  const token = getToken();

  return apiInstance(API_ENDPOINTS.todos, {
    method: 'POST',
    headers: {
      Authorization: token ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then<TodoType>(({data}) => data);
};

const updateTodo = (id: string) => (form: TodoFormType) => {
  const token = getToken();

  return apiInstance(API_ENDPOINTS.todos + `/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: token ?? '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then<TodoType>(({data}) => data);
};

const deleteTodo = (id: string) => {
  const token = getToken();

  return apiInstance(API_ENDPOINTS.todos + `/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token ?? '',
    },
  })
    .then(res => res.json())
    .then(({data}) => data);
};

export {postLogin, postSignUp, getTodos, getTodoById, createTodo, updateTodo, deleteTodo};
