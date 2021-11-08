import React, {useEffect, useState} from 'react';
import styles from "./Popular.module.scss"
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import { RingLoader} from "react-spinners";
import {css} from "@emotion/react";
import GenresMenu from "../../components/GenresMenu/GenresMenu";

const Popular = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState('');

  const override = css`
  margin-top: 100px;
`;

  const popularGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?sort-by=popularity${genre ? `&category=${genre}` : ''}`);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    popularGamesFetch();
  }, [genre])

  return (
    <div>
      <span className={styles.pageTitle}>Popular</span>
      <div className={styles.navBar}><GenresMenu setGenre={setGenre} genre={genre}/></div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override}/> : content.map((c, index) =>
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