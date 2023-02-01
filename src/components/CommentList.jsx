import { useContext } from 'react';
import { useParams } from 'react-router';
import CommentsContext from '../context/CommentsContext';
import Comment from './Comment';

const CommentList = () => {
  const commentsContext = useContext(CommentsContext);

  const { videoId } = useParams();

  const comments = commentsContext.comments.filter(
    (comment) => comment.videoId === videoId
  );

  if (!comments) {
    return <p>There are no comments for this video yet.</p>
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
