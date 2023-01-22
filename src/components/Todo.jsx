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
        style={{ marginRight: '15px', marginLeft: '15px' }}
      >
        {title}
      </label>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default Todo;
