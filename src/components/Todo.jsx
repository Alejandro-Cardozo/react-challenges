/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const todoStyles = css`
  margin: 2px;
  padding: 2rem;
  width: 30%;
  min-width: 25rem;
  border-radius: 4px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    width: auto;
    transform: scale(1.02);
    transition: transform .1s;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75);

    & > p {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  }

  & > input {
    transform: scale(1.05);
    cursor: pointer;
  }

  & > p {
    margin: 0 15px;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > .checked {
    color: gray;
    text-decoration: line-through;
  }

  & > button {
    padding: 1.2rem 0.8rem;
    height: 1rem;
    align-self: center;
    line-height: 0;
  }
`;

const Todo = ({ id, title, checked, onDelete, onCheck }) => {
  return (
    <div css={todoStyles}>
      <input
        type='checkbox'
        name={`${title + id}`}
        id={`${title + id}`}
        checked={checked}
        onChange={onCheck}
      />
      <p className={checked ? 'checked' : ''}>{title}</p>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default Todo;
