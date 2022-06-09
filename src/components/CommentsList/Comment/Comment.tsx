import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";

import { deleteComment } from "../../../store/actions";
import styles from "./Comment.module.css";

export const Comment = ({ username, comment, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.profilePic}>
        <PersonIcon fontSize="medium" />
      </div>
      <div className={styles.commentContent}>
        <div className={styles.username}>{username}</div>
        <div className={styles.comment}>{comment}</div>
      </div>
      <DeleteIcon
        color="error"
        onClick={handleDelete}
        className={styles.deleteBtn}
      />
    </div>
  );
};
