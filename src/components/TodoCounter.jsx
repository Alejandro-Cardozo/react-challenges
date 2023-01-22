import { useContext } from 'react';

import TodoContext from '../context/context';

const TodoCounter = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <h3>
      DONE: <span>{todoCtx.todos.filter((el) => el.checked).length}</span>
    </h3>
  );
};

export default TodoCounter;
