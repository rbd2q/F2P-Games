import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addComment } from "../../../store/reducers/commentsReducer";

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
        username: username || "Anonymus",
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
    <form
      onSubmit={handleSubmit(dispatchFavoriteGames)}
      className="w-full sm:flex sm:justify-center"
    >
      <div className="flex flex-col my-8">
        <TextField
          className="!w-full sm:!w-96"
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
          className="!w-full sm:!w-96 !mt-2"
          id="filled-multiline-static"
          label="Comment"
          required
          multiline
          rows={4}
          value={commentText}
          onChange={handleChangeComment}
          placeholder="Write your comment"
          variant="filled"
        />
        <Button
          type="submit"
          className="!mt-2"
          variant="contained"
          disabled={!commentText || isSubmitting}
        >
          Send
        </Button>
      </div>
    </form>
  );
};
