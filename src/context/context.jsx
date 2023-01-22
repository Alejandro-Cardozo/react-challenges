import { createContext, useState } from 'react';

const TodoContext = createContext({
  todos: [],
  selectTodo: (id) => {},
  deleteTodo: (id) => {},
  addTodo: (todo) => {},
});

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Work out', checked: false },
    { id: 2, title: 'Order pizza', checked: true },
    { id: 3, title: 'Dinner', checked: false },
  ]);

  const selectTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const deleteTodoHandler = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };
  const addTodoHandler = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        selectTodo: selectTodoHandler,
        deleteTodo: deleteTodoHandler,
        addTodo: addTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
