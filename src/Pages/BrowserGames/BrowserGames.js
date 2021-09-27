import React, {useEffect, useState} from 'react';
import styles from './BrowserGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";

const BrowserGames = () => {

  const [content, setContent] = useState([]);

  const BrowserGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?platform=browser`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    BrowserGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>Browser Games</span>
      <div className={styles.gamesWrapper}>
        {content && content.map((c) =>
          <SingleContent
            key={c.id}
            id={c.id}
            title={c.title}
            platform="Web Browser"
            genre={c.genre}
            thumbnail={c.thumbnail}
            release_date={c.release_date}
          />
        )}
      </div>
    </div>
  );
};

export default BrowserGames;