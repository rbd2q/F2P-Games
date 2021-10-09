import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteComment} from "../../../store/actions";
import PersonIcon from '@mui/icons-material/Person';
import styles from './Comment.module.scss'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Comment = ({username, comment, id}) => {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.commentsReducer);

  const handleDelete = () => {
    dispatch(deleteComment(id));
  }

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.profilePic}>
        <PersonIcon fontSize={'medium'}/>
      </div>
      <div className={styles.commentContent}>
        <div className={styles.username}>{username}</div>
        <div className={styles.comment}>{comment}</div>
      </div>
      <DeleteIcon
        color={"error"}
        onClick={handleDelete}
        className={styles.deleteBtn}
      />
    </div>
  );
};

export default Comment;