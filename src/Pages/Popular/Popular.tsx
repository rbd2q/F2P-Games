import { css } from "@emotion/react";
import { useMemo, useState } from "react";
import { RingLoader } from "react-spinners";

import { GenresMenu } from "../../components/GenresMenu/GenresMenu";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import { useFetchPopularGames } from "./model";
import styles from "./Popular.module.css";

// TODO
export const Popular = () => {
  const [genre, setGenre] = useState("");
  const override = css`
    margin-top: 100px;
  `;

  const gamesData = useFetchPopularGames(genre);
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);

  return (
    <div>
      <span className={styles.pageTitle}>Popular</span>
      <div className={styles.navBar}>
        <GenresMenu setGenre={setGenre} genre={genre} />
      </div>
      <div className={styles.gamesWrapper}>
        {gamesData.isLoading ? (
          <RingLoader size={200} speedMultiplier={3} css={override} />
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
    </div>
  );
};
