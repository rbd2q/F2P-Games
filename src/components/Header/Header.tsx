import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";

import { SearchGame } from "../SearchGame/SearchGame";
import styles from "./Header.module.css";

export const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/Popular");
  };

  return (
    <div className={styles.header}>
      <button onClick={handleHomeClick} className="absolute left-8">
        <HomeIcon className={styles.homeButton} />
      </button>
      <p>Free-to-play Games</p>
      <SearchGame />
    </div>
  );
};
