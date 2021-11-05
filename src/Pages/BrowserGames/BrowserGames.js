import React, {useEffect, useState} from 'react';
import styles from './BrowserGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import {RingLoader} from "react-spinners";
import {css} from "@emotion/react";
import GenresMenu from "../../components/GenresMenu/GenresMenu";
import SortingMenu from "../../components/SortingMenu/SortingMenu";
import BasicPagination from "../../components/Pagination/Pagination/Pagination";
import PaginationButtons from "../../components/Pagination/PaginationButtons/PaginationButtons";

const BrowserGames = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(30);
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = content.slice(indexOfFirstGame, indexOfLastGame);

  const override = css`
  margin-top: 100px;
`;

  const browserGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?platform=browser${genre ? `&category=${genre}` : ''}${sort ? `&sort-by=${sort}` : ''}`);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    browserGamesFetch()
  }, [genre, sort])

  return (
    <div>
      <span className={styles.pageTitle}>Browser Games</span>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre}/>
        <BasicPagination
          setCurrentPage={setCurrentPage}
          gamesPerPage={gamesPerPage}
          numberOfGames={content.length}
          currentPage={currentPage}
        />
        <SortingMenu setSort={setSort}/>
      </div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override}/> : currentGames.map((c) =>
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
      {content.length > 0 &&
        <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        gamesPerPage={gamesPerPage}
        numberOfGames={content.length}
      />}
    </div>
  );
};

export default BrowserGames;