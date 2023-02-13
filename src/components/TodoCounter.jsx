/** @jsxImportSource @emotion/react */

import { useContext } from 'react';

import TodoContext from '../context/context';

import { css } from '@emotion/react';

const TodoCounter = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <h3
      css={
        !todoCtx.todos.length
          ? css`
              display: none ;
            `
          : css`
              color: whitesmoke;
            `
      }
    >
      Tasks Completed &rarr;{' '}
      <span>{todoCtx.todos.filter((el) => el.checked).length}</span>
    </h3>
  );
};

export default TodoCounter;
