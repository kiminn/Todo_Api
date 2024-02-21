import { axiosInstance } from './core';

const PATH = '/todo';

const TodoApi = {
    deleteTodo: async (todoId) => await axiosInstance.delete(PATH + `/${todoId}`),
    addTodo: async (todoData) => await axiosInstance.post(PATH, todoData),
    getTodo: async () => await axiosInstance.get(PATH),
    editTodo: async (todoData) => await axiosInstance.patch(PATH, todoData),
};

export default TodoApi;

/**
 * formData쓸 때 header바꿔줘야함:
 * https://axios-http.com/docs/multipart
 */
