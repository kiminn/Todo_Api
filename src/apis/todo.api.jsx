import { axiosInstance } from './core';

const PATH = '/todo';

const TodoApi = {
    deleteTodo: async (id) => await axiosInstance.delete(PATH + `${id}`),
};

export default TodoApi;
