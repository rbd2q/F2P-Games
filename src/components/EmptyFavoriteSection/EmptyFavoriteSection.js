import React from 'react';
import styles from './EmptyFavoriteSection.module.scss'

const EmptyFavoriteSection = () => {
  return (
    <div className={styles.wrapper}>
      You haven't add any games to favorite yet :(
    </div>
  );
};

export default EmptyFavoriteSection;