import { useSelector } from "react-redux";

import { EmptyFavoriteSection } from "../../components/EmptyFavoriteSection/EmptyFavoriteSection";
import { SingleContent } from "../../components/SingleContent/SingleContent";
import styles from "./Favorite.module.css";

// TODO
export const Favorite = () => {
  const games = useSelector((state: any) => state.favoriteSlice);

  return (
    <div className={styles.gamesWrapper}>
      {games.length === 0 ? (
        <EmptyFavoriteSection />
      ) : (
        games?.map((g) => (
          <SingleContent
            key={g.id}
            id={g.id}
            title={g.title}
            platform={g.platform}
            genre={g.genre}
            thumbnail={g.thumbnail}
            release_date={g.release_date}
          />
        ))
      )}
    </div>
  );
};
