import React, {useEffect, useState} from 'react';
import CommentForm from "./CommentForm/CommentForm";
import styles from './CommentsList.module.scss'
import Comment from "./Comment/Comment";
import {useSelector} from "react-redux";

const CommentsList = (id) => {
  const [comments, setComments] = useState([]);
  const storeDataComment = useSelector(state => state.commentsReducer);

  useEffect(() => {
    const arr = Object.entries(storeDataComment);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1],
        }
      })
      setComments(res)
    }
  }, [])

  return (
    <div className={styles.commentsWrapper}>
      <h2 className={styles.commentsTitle}>Comments</h2>
      <CommentForm id={id}/>
      {comments.map((c) =>
        <Comment key={c.id} username={c.username} comment={c.comment} id={c.id}/>
      )}
    </div>
  );
};

export default CommentsList;