import classes from './Comment.module.css';

const Comment = ({ data }) => {
  const { userName, comment, date } = data;

  return (
    <div className={classes.box}>
      <h3>
        {userName}{' '}
        <span
          style={{ fontSize: '.8rem', color: 'ghostwhite', fontWeight: 200 }}
        >
          {date}
        </span>
      </h3>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
