import { useMemo, useState } from "react";

import { GamePageSkeleton } from "../../components/game-page-skeleton";
import { GenresMenu } from "../../components/GenresMenu/GenresMenu";
import { BasicPagination } from "../../components/Pagination/Pagination/Pagination";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import { SortingMenu } from "../../components/SortingMenu/SortingMenu";
import styles from "./AllGames.module.css";
import { useFetchAllGames } from "./model";

export const AllGames = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(30);
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");

  const gamesData = useFetchAllGames(genre, sort);
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = data.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre} genre={genre} />
        <SortingMenu setSort={setSort} sort={sort} />
      </div>
      <div className={styles.gamesWrapper}>
        {gamesData.isLoading ? (
          <div className="mt-4">
            <GamePageSkeleton />
          </div>
        ) : (
          currentGames.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title}
              platform={c.platform}
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
