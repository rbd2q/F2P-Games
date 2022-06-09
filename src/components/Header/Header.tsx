import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";

import { SearchGame } from "../SearchGame/SearchGame";
import styles from "./Header.module.scss";

export const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/Popular");
  };

  return (
    <div className={styles.header}>
      <HomeIcon className={styles.homeButton} onClick={handleHomeClick} />
      <p>Free-to-play Games</p>
      <SearchGame />
    </div>
  );
};
