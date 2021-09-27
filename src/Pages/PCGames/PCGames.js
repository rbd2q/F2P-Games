import React, {useEffect, useState} from 'react';
import styles from './PCGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";

const PCGames = () => {
  const [content, setContent] = useState([]);

  const PCGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?platform=pc`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    PCGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>PC Games</span>
      <div className={styles.gamesWrapper}>
        {content && content.map((c) =>
          <SingleContent
            key={c.id}
            id={c.id}
            title={c.title}
            platform="PC (Windows)"
            genre={c.genre}
            thumbnail={c.thumbnail}
            release_date={c.release_date}
          />
        )}
      </div>
    </div>
  );
};

export default PCGames;