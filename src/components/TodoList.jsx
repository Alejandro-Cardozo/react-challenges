/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useContext } from 'react';
import TodoContext from '../context/context';
import Todo from './Todo';

const noTasksStyles = css`
  color: whitesmoke;
`;

const listStyles = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: max-content;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <>
      {!todoCtx.todos.length ? (
        <div css={listStyles}>
          <h5 css={noTasksStyles}>Nothing to do today</h5>
        </div>
      ) : (
        <div css={listStyles}>
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
      )}
    </>
  );
};

export default TodoList;
