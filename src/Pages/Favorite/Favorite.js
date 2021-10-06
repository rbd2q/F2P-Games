import React, {useEffect, useState} from 'react';
import styles from './Favorite.module.scss';
import {useSelector} from "react-redux";
import SingleContent from "../../components/SingleContent/SingleContent";

const Favorite = () => {
  const [games, setGames] = useState([]);

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1],
        }
      })

      console.log('res', res)
      setGames(res)
    }
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>Favorite</span>
      <div className={styles.gamesWrapper}>
        {games.map((g) =>
          <SingleContent
            key={g.id}
            id={g.id}
            title={g.title}
            platform={g.platform} //TODO
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