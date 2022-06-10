import { css } from "@emotion/react";
import { useMemo, useState } from "react";
import { RingLoader } from "react-spinners";

import { GenresMenu } from "../../components/GenresMenu/GenresMenu";
import { BasicPagination } from "../../components/Pagination/Pagination/Pagination";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import { SortingMenu } from "../../components/SortingMenu/SortingMenu";
import { useFetchAllGames } from "../AllGames/model";
import styles from "./BrowserGames.module.css";

export const BrowserGames = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(30);
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");

  const gamesData = useFetchAllGames(genre, sort);
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = data.slice(indexOfFirstGame, indexOfLastGame);

  const override = css`
    margin-top: 100px;
  `;

  return (
    <div>
      <span className={styles.pageTitle}>Browser Games</span>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre} genre={genre} />
        <SortingMenu setSort={setSort} sort={sort} />
      </div>
      <div className={styles.gamesWrapper}>
        {gamesData.isLoading ? (
          <RingLoader size={200} speedMultiplier={3} css={override} />
        ) : (
          currentGames.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title}
              platform="Web Browser"
              genre={c.genre}
              thumbnail={c.thumbnail}
              release_date={c.release_date}
            />
          ))
        )}
      </div>
      <div className={styles.paginationWrapper}>
        <BasicPagination
          setCurrentPage={setCurrentPage}
          gamesPerPage={gamesPerPage}
          numberOfGames={data.length}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
