import React from "react";
import { useSelector } from "react-redux";

import { commentForGame } from "../../store/selectors";
import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm";
import styles from "./CommentsList.module.scss";

function CommentsList({ id }) {
  const comments = useSelector((state) => commentForGame(state, id));

  return (
    <div className={styles.commentsWrapper}>
      <h2 className={styles.commentsTitle}>Comments</h2>
      <CommentForm id={id} />
      {comments.map((c) => (
        <Comment
          key={c.id}
          username={c.username}
          comment={c.comment}
          id={c.id}
        />
      ))}
    </div>
  );
}

export default CommentsList;
