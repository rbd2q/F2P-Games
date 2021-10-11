import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Header.module.scss'
import {useHistory} from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

    return (
        <div className={styles.header} onClick={() => window.scroll(0, 0)}>
            <HomeIcon className={styles.homeButton} onClick={handleHomeClick}/>
            Free-to-play Games
        </div>
    );
};

export default Header;