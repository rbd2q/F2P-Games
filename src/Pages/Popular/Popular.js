import React, {useEffect, useState} from 'react';
import styles from "./Popular.module.scss"
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";

const Popular = () => {

  const [content, setContent] = useState([]);

  const popularGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?sort-by=popularity`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    popularGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>Popular</span>
      <div className={styles.navBar}></div>
      <div className={styles.gamesWrapper}>
        {content && content.map((c, index) =>
          index <= 49 ?
          <SingleContent
            key={c.id}
            id={c.id}
            title={c.title}
            platform={c.platform}
            genre={c.genre}
            thumbnail={c.thumbnail}
            release_date={c.release_date}
          /> : []
        )}
      </div>
    </div>
  );
};

export default Popular;