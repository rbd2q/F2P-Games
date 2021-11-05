import React, {useEffect, useState} from 'react';
import styles from './AllGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import GenresMenu from "../../components/GenresMenu/GenresMenu";
import SortingMenu from "../../components/SortingMenu/SortingMenu";

import {RingLoader} from "react-spinners";
import { css } from "@emotion/react";
import BasicPagination from "../../components/Pagination/Pagination";


const AllGames = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');

  const override = css`
  margin-top: 100px;
`;

  const allGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?${genre ? `category=${genre}` : ''}${sort ? `&sort-by=${sort}` : ''}`);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    allGamesFetch()
  }, [genre, sort])

  useEffect(() => {
    console.log(pageNumber)
  }, [pageNumber])

  return (
    <div>
      <span className={styles.pageTitle}>All Games</span>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre}/>
        <BasicPagination setPageNumber={setPageNumber}/>
        <SortingMenu setSort={setSort}/>
      </div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override}/> : content.map((c, index) =>
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