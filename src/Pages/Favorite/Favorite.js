import React from 'react';
import styles from './Favorite.module.scss';
import {useSelector} from "react-redux";
import SingleContent from "../../components/SingleContent/SingleContent";
import EmptyFavoriteSection from "../../components/EmptyFavoriteSection/EmptyFavoriteSection";

const Favorite = () => {
  const games = useSelector(state => state.favoriteReducer)

  return (
    <div>
      <span className={styles.pageTitle}>Favorite</span>
      <div className={styles.gamesWrapper}>
        {games.length === 0 ? <EmptyFavoriteSection /> : games.map((g) =>
          <SingleContent
            key={g.id}
            id={g.id}
            title={g.title}
            platform={g.platform}
            genre={g.genre}
            thumbnail={g.thumbnail}
            release_date={g.release_date}
          />
        )}
      </div>
    </div>
  );
};

export default Favorite;