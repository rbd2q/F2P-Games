import React, {useEffect, useState} from 'react';
import styles from './PCGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import {RingLoader} from "react-spinners";
import {css} from "@emotion/react";

const PCGames = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const override = css`
  margin-top: 100px;
`;

  const PCGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?platform=pc`);


    console.log(data);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    PCGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>PC Games</span>
      <div className={styles.navBar}></div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override}/> : content.map((c) =>
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