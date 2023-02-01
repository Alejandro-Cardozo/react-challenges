import { createContext, useState } from 'react';

const CommentsContext = createContext({
  comments: [],
  addComment: (videoId, userName, comment) => {},
});

import React from 'react';

export const CommentsContextProvider = (props) => {
  const [comments, setComments] = useState([]);

  const addCommentsHandler = (videoId, userName, comment) => {
    const date = new Date().toISOString();
    const newComment = {
      id: comments.length ? comments[comments.length - 1].id + 1 : 0,
      videoId: videoId,
      userName: userName,
      comment: comment,
      date: date,
    }

    setComments(prev => [...prev, newComment]);
  }

  return (
    <CommentsContext.Provider value={comments, addCommentsHandler} >
      {props.children}
    </CommentsContext.Provider>
  );
};

export default CommentsContext;
