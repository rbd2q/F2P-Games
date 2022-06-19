import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { DeleteIcon } from "../../../icons/DeleteIcon";
import { deleteComment } from "../../../store/reducers/commentsReducer";
import styles from "./Comment.module.css";

export const Comment = ({ username, comment, creationDate, id }) => {
  const dispatch = useDispatch();
  const avatarScr = useMemo(
    () =>
      `https://www.gravatar.com/avatar/af1b${id}f01f846ed4198fa3d4c9f42eeef?s=32&d=wavatar`,
    [id]
  );

  const handleDelete = () => {
    dispatch(deleteComment({ id }));
  };

  return (
    <div className="flex justify-between items-start mb-4 w-full sm:w-4/5 bg-[#ebecf6] rounded-lg p-5 pb-12 relative">
      <div className="flex items-start">
        <div className="mr-6 p-1">
          <img className="rounded-full" src={avatarScr} alt="avatar" />
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
