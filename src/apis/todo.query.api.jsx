import TodoApi from './todo.api';

const TodoQueryApi = {
    deleteTodo: (id, successFn) => 
    useMutateData(() => TodoApi.deleteTodo(id), [QueryKey.todoData, id], successFn),
};

export default TodoQueryApi;

