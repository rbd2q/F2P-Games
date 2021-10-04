import React, {useEffect, useState} from 'react';
import styles from './AllGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import GenresMenu from "../../components/GenresMenu/GenresMenu";
import {useParams} from "react-router-dom";
import SortingMenu from "../../components/SortingMenu/SortingMenu";

import {RingLoader} from "react-spinners";
import { css } from "@emotion/react";


const AllGames = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const { genre } = useParams();
  const { sort } = useParams();

  const override = css`
  margin-top: 100px;
`;

  const allGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?${genre ? `category=${genre}` : ''}${sort ? `&sort-by=${sort}` : ''}`);

    console.log(data);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    allGamesFetch()
  }, [genre, sort])

  return (
    <div>
      <span className={styles.pageTitle}>All Games</span>
      <div className={styles.navBar}><GenresMenu/> <SortingMenu/></div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override}/> : content.map((c) =>
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