import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Header.module.scss'
import {useHistory} from "react-router-dom";
import SearchGame from "../SearchGame/SearchGame";

const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

  return (
    <div className={styles.header} onClick={() => window.scroll(0, 0)}>
      <HomeIcon className={styles.homeButton} onClick={handleHomeClick}/>
      <p>Free-to-play Games</p>
      <SearchGame/>
    </div>
  );
};

export default Header;