import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addComment } from "../../../store/reducers/commentsReducer";
import styles from "./CommentForm.module.css";

// TODO
export const CommentForm = (props) => {
  const { id } = props;

  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatchFavoriteGames = () => {
    dispatch(
      addComment({
        username,
        comment: commentText,
        gameID: id,
      })
    );
    setUsername("");
    setCommentText("");
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeComment = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(dispatchFavoriteGames)}>
      <div className={styles.commentForm}>
        <TextField
          className={styles.addUsernameInput}
          id="filled-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          value={username}
          onChange={handleChangeUsername}
          placeholder="Your username"
          variant="filled"
        />
        <TextField
          className={styles.addCommentInput}
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          value={commentText}
          onChange={handleChangeComment}
          placeholder="Write your comment"
          variant="filled"
        />
        <Button
          type="submit"
          className={styles.sendCommentBtn}
          variant="contained"
          disabled={!commentText || isSubmitting}
        >
          Send
        </Button>
      </div>
    </form>
  );
};
