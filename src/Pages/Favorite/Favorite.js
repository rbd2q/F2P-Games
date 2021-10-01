import React, {useState} from 'react';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <span className={styles.pageTitle}>Favorite</span>
    </div>
  );
};

export default Favorite;