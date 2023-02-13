/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const labelStyles = css`
  margin: 0 15px;
`

const todoStyles = css`
  margin: 2px;
`

const Todo = ({ id, title, checked, onDelete, onCheck }) => {
  return (
    <div style={{ margin: '2px' }}>
      <input
        type='checkbox'
        name={`${title + id}`}
        id={`${title + id}`}
        checked={checked}
        onChange={onCheck}
      />
      <label
        htmlFor={`${title + id}`}
        css={labelStyles}
      >
        {title}
      </label>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default Todo;
