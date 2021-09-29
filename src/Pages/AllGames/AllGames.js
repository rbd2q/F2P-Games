import React, {useEffect, useState} from 'react';
import styles from './AllGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import GenresMenu from "../../components/GenresMenu/GenresMenu";
import {useParams} from "react-router-dom";


const AllGames = () => {
  const [content, setContent] = useState([]);
  const { genre } = useParams();

  const allGamesFetch = async () => {
    const {data} = await axios.get(`/api/games${genre ? `?category=${genre}` : ''}`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    allGamesFetch()
  }, [genre])

  return (
    <div>
      <span className={styles.pageTitle}>All Games</span>
      <div className={styles.navBar}><GenresMenu/></div>
      <div className={styles.gamesWrapper}>
        {content && content.map((c) =>
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title}
                platform={c.platform}
                genre={c.genre}
                thumbnail={c.thumbnail}
                release_date={c.release_date}
              />
          )}
      </div>
    </div>
  );
};

export default AllGames;