import { useContext } from 'react';
import CommentsContext from '../context/CommentsContext';
import Comment from './Comment';

const CommentList = ({ videoId }) => {
  const commentsContext = useContext(CommentsContext);

  const comments = commentsContext.comments
    .filter((comment) => comment.videoId === videoId).reverse()

  if (!comments.length) {
    return <p style={{display: 'flex' ,justifyContent: 'center'}}>There are no comments for this video yet.</p>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentList;