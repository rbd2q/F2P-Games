import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header} onClick={() => window.scroll(0, 0)}>
            Free-to-play Games
        </div>
    );
};

export default Header;