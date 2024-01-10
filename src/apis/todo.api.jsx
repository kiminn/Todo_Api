import { axiosInstance } from './core';

const PATH = '/todo';

const TodoApi = {
    deleteTodo: async (todoId) => await axiosInstance.delete(PATH + `${todoId}`),
    addTodo: async (todoData) =>
        await axiosInstance.post(PATH, todoData, {
            headers: {},
        }),
    getTodo: async () => await axiosInstance.get(PATH),
};

export default TodoApi;
