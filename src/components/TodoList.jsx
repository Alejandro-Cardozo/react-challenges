import { useContext } from 'react';
import TodoContext from '../context/context';
import Todo from './Todo';
import classes from './Todo.module.css';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <>
      <hr />
      {!todoCtx.todos.length && <h5>Nothing to do today</h5>}
      <div className={classes.list}>
        {todoCtx.todos.map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            title={task.title}
            checked={task.checked}
            onDelete={todoCtx.deleteTodo.bind(null, task.id)}
            onCheck={todoCtx.selectTodo.bind(null, task.id)}
          />
        ))}
      </div>
      <hr />
    </>
  );
};

export default TodoList;
