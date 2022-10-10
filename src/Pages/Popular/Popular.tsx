import { useMemo, useState } from "react";

import { GamePageSkeleton } from "../../components/game-page-skeleton";
import { GenresMenu } from "../../components/GenresMenu/GenresMenu";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import { useFetchPopularGames } from "./model";
import styles from "./Popular.module.css";

export const Popular = () => {
  const [genre, setGenre] = useState("");

  const gamesData = useFetchPopularGames(genre);
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);

  return (
    <>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre} genre={genre} />
      </div>
      <div className={styles.gamesWrapper}>
        {gamesData.isLoading ? (
          <div className="mt-4">
            <GamePageSkeleton />
          </div>
        ) : (
          data.map((c, index) =>
            index <= 49 ? (
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title}
                platform={c.platform}
                genre={c.genre}
                thumbnail={c.thumbnail}
                release_date={c.release_date}
              />
            ) : (
              []
            )
          )
        )}
      </div>
    </>
  );
};
