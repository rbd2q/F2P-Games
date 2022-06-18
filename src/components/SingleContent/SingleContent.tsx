import { Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { unavailable } from "../../config/config";
import styles from "./SingleContent.module.css";

// TODO
export const SingleContent = ({
  id,
  title,
  genre,
  platform,
  thumbnail,
  release_date,
}) => {
  const history = useHistory();

  const handleClick = () => {
    window.scroll(0, 0);
    history.push(`/game/detail/id=${id}`);
  };

  const checkBudgeContent = () => {
    if (platform === "PC (Windows)") {
      return "PC";
    }
    if (platform === "Web Browser") {
      return "Web";
    }
    return "PC";
  };
  const checkBudgeColor = () => {
    if (platform === "PC (Windows)") {
      return "primary";
    }
    if (platform === "Web Browser") {
      return "secondary";
    }
    return "primary";
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={styles.gameBlock} onClick={handleClick}>
      <Badge badgeContent={checkBudgeContent()} color={checkBudgeColor()} />
      <img
        className={styles.thumbnail}
        src={thumbnail || unavailable}
        alt={title}
      />
      <div className="w-full font-bold text-center py-2">{title}</div>
      <div className="flex justify-between flex-wrap px-2 text-xs md:text-sm">
        <span className="mr-2">{genre}</span>
        <span>{release_date}</span>
      </div>
    </div>
  );
};
