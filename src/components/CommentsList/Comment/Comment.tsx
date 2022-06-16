import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";

import { DeleteIcon } from "../../../icons/DeleteIcon";
import { deleteComment } from "../../../store/reducers/commentsReducer";
import styles from "./Comment.module.css";

export const Comment = ({ username, comment, creationDate, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment({ id }));
  };

  return (
    <div className="flex justify-between items-start mb-4 w-4/5 bg-[#ebecf6] rounded-lg p-5 pb-12 relative">
      <div className="flex items-start">
        <div className="mr-6 bg-[#999999] p-1">
          <PersonIcon fontSize="medium" />
        </div>
        <div className="flex flex-col h-full">
          <div className="text-lg mb-4 text-[#f6904c]">{username}</div>
          <div className={styles.comment}>{comment}</div>
        </div>
      </div>

      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <div className="absolute bottom-4 right-4 text-xs opacity-60">
        {creationDate}
      </div>
    </div>
  );
};
