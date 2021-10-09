import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './CommentForm.module.scss'
import Button from "@mui/material/Button";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addComments} from "../../../store/actions";

export default function CommentForm(id) {
  const [comment, setComment] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [commentText, setCommentText] = React.useState(``);
  const commentRef = useRef(null);
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const commentID = Math.round(Math.random()*1000);

  const dispatchFavoriteGames = () => {
    const finalComment = `${username} : ${commentText}`;
    console.log(`final comment: ${finalComment}`);
    setComment(finalComment);

    dispatch(addComments({
      [commentID]: {
        username: username,
        comment: commentText,
      }
      }, id
    ));
    setUsername('');
    setCommentText('');
  }

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleNameKeyDown = (event) => {
    if (event.key === 'Enter') {
      commentRef.current.focus();
    }
  };

  const handleCommentKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitRef.current.focus();
    }
  };

  const handleChangeComment = (event) => {
    setCommentText(event.target.value);
  };

  console.log(username, commentText);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '250px'},
      }}
      noValidate
      autoComplete="off"
      fullWidth='true'
    >
      <div className={styles.commentForm}>
        <TextField
          id="filled-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          value={username}
          onChange={handleChangeUsername}
          onKeyDown={handleNameKeyDown}
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
          onKeyDown={handleCommentKeyDown}
          inputRef={commentRef}
          placeholder="Write your comment"
          variant="filled"
        />
        <Button
          className={styles.sendCommentBtn}
          variant="contained"
          onClick={dispatchFavoriteGames}
          ref={submitRef}
          disabled={!commentText}
        >
          Send
        </Button>
      </div>
    </Box>
  );
}