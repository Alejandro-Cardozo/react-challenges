import React, { useState, useContext } from 'react';
import TodoContext from '../context/context';

const AddTodo = () => {
  const [task, setTask] = useState('');

  const todoCtx = useContext(TodoContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    todoCtx.addTodo({
      id: todoCtx.todos.length
        ? todoCtx.todos[todoCtx.todos.length - 1].id + 1
        : 0,
      title: task,
      checked: false,
    });
    setTask('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        placeholder='New task...'
      />
      <button>ADD TASK</button>
    </form>
  );
};

export default AddTodo;
