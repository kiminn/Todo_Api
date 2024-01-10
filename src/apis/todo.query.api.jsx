import useMutateData from '../hooks/use-mutate-data';
import TodoApi from './todo.api';

const TodoQueryApi = {
    deleteTodo: (todoId, successFn) =>
        useMutateData(() => TodoApi.deleteTodo(todoId), [QueryKey.todoData, todoId], successFn),
    addTodo: (todo) => {
        useMutateData(() => TodoApi.addTodo(todo), [QueryKey.productRegister]);
    },
};

export default TodoQueryApi;
