import React, {useEffect, useState} from 'react';
import CommentForm from "./CommentForm/CommentForm";
import styles from './CommentsList.module.scss'
import Comment from "./Comment/Comment";
import {useSelector} from "react-redux";
import {commentForGame} from "../../store/selectors";

const CommentsList = ({id}) => {
  const comments = useSelector(state => {
    return commentForGame(state, id);
  });

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