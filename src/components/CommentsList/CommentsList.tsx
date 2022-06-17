import { useSelector } from "react-redux";

import { commentForGame } from "../../store/selectors";
import { CommentType } from "../../types";
import { Comment } from "./Comment/Comment";
import { CommentForm } from "./CommentForm/CommentForm";
import styles from "./CommentsList.module.css";

export const CommentsList = ({ id }) => {
  const comments: CommentType[] = useSelector((state) =>
    commentForGame(state, id)
  );

  return (
    <div className={styles.commentsWrapper}>
      <h2 className={styles.commentsTitle}>Comments</h2>
      <CommentForm id={id} />
      {comments.length
        ? comments.map((comment) => (
            <Comment
              key={comment.id}
              username={comment.username}
              comment={comment.comment}
              creationDate={comment.creationDate}
              id={comment.id}
            />
          ))
        : null}
    </div>
  );
};
