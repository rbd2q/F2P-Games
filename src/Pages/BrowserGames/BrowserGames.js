import React, {useEffect, useState} from 'react';
import styles from './BrowserGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import {RingLoader} from "react-spinners";

const BrowserGames = () => {

  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const browserGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?platform=browser`);


    console.log(data);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    browserGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>Browser Games</span>
      <div className={styles.navBar}></div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} /> : content.map((c) =>
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