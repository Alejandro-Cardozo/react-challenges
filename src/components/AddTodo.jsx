/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from 'react';
import TodoContext from '../context/context';
import { css } from '@emotion/react';

/**
 * .form__label {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
}

.form__input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
}
 */

const formStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    font-family: 'Roboto', sans-serif;
    color: #777;
    font-size: 1.8rem;
    padding: 1.7rem 2rem;
    border-radius: 0.8rem 0 0 0.8rem;
    background-color: rgb(255, 255, 255);
    border: none;
    transition: all 0.3s;
  }

  & > button {
    padding: 0 2rem;
    font-size: 5rem;
    color: #653bd9;
    background-color: #a387f0;
    border: none;
    border-radius: 0 0.8rem 0.8rem 0;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;

    &:hover {
      color: #a387f0;
      background-color: #653bd9;
    }
  }
`;

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
    <form onSubmit={onSubmitHandler} css={formStyles}>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        maxLength='32'
        placeholder='New task...'
      />
      <button>+</button>
    </form>
  );
};

export default AddTodo;
