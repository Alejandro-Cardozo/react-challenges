import { useContext, useState } from 'react';
import CommentsContext from '../context/CommentsContext';
import classes from './NewComment.module.css';

const NewComment = ({ videoId }) => {
  const commentsCtx = useContext(CommentsContext);

  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    commentsCtx.addComment(videoId, userName, comment);

    setComment('');
  }

  return (
    <div>
      <form className={classes.commentForm} onSubmit={submitHandler}>
        <fieldset className={classes.formFieldset}>
          <label htmlFor='name' className={classes.formLabel}>
            Tu Nombre
            <input
              className={classes.formInput}
              type='text'
              name='name'
              id='name'
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </fieldset>
        <fieldset className={classes.formFieldset}>
          <label htmlFor='comment' className={classes.formLabel}>
            Tu Comentario
            <textarea
              name='comment'
              className={classes.formInput}
              id='comment'
              rows='10'
              value={comment}
              placeholder='Escribe algo...'
              required
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>
        </fieldset>
        <button className={classes.formButton}>Add Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
