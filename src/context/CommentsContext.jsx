import { createContext, useState } from 'react';
import commentaries from '../data/comments';

const CommentsContext = createContext({
  comments: [],
  addComment: (videoId, userName, comment) => {},
});

import React from 'react';

export const CommentsContextProvider = (props) => {
  const [comments, setComments] = useState(commentaries);

  const addCommentsHandler = (videoId, userName, comment) => {
    const date = new Date().toISOString();
    const newComment = {
      id: comments.length ? comments[comments.length - 1].id + 1 : 0,
      videoId: videoId,
      userName: userName,
      comment: comment,
      date: date,
    };

    setComments((prev) => [...prev, newComment]);
  };

  return (
    <CommentsContext.Provider
      value={{ comments: comments, addComment: addCommentsHandler }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
};

export default CommentsContext;
