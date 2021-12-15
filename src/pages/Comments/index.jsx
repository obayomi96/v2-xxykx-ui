import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import CommentService from '../../api/comment';

const commentService = new CommentService();

const { fetchComments } = commentService;

function Comments() {
  const [ commentsList, setCommentsList ] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await fetchComments();
      setCommentsList(response);
    }
    loadData();
  }, [commentsList]);

  return (
    <div className="App">
      <Header />
      comments page
      <div>
        <ul>
          {
            commentsList.map((comment) => {
              <li key={comment.id}>{comment.text}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Comments;
