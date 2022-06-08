import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useHistory } from "react-router-dom";

import SearchGame from "../SearchGame/SearchGame";
import styles from "./Header.module.scss";

function Header() {
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
}

export default Header;
