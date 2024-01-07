import { createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return <TodoContext.Provider value={[todoList, setTodoList]}>{children}</TodoContext.Provider>;
};

export default TodoProvider;