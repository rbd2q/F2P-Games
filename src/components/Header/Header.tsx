import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";

import { BurgerMenu } from "../BurgerMenu";
import { SearchGame } from "../SearchGame/SearchGame";
import styles from "./Header.module.css";

export const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/Popular");
  };

  return (
    <div className={styles.header}>
      <button
        onClick={handleHomeClick}
        className="absolute hidden left-8 md:block"
      >
        <HomeIcon className={styles.homeButton} />
      </button>
      <p className="hidden md:block">F2P Games</p>
      <div className="block md:hidden">
        <BurgerMenu />
      </div>
      <SearchGame />
    </div>
  );
};
