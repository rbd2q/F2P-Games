import { css } from "@emotion/react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

import { CommentsList } from "../../components/CommentsList/CommentsList";
import { unavailable } from "../../config/config";
import { removeGameFromFavorite, setGameToFavorite } from "../../store/actions";
import { isGameInFavoritesSelector } from "../../store/selectors";
import { GameApiResponse } from "../../types";
import styles from "./GamePage.module.css";
import IconFavorite from "./img/Like.svg";
import IconFavoriteFill from "./img/Like-fill.svg";
import { useFetchGame } from "./model";
import { ScreenshotModal } from "./ScreenshotModal";

export const GamePage = () => {
  const { id } = useParams();

  const gameData = useFetchGame(id);
  const data = useMemo(
    () => gameData.data || [],
    [gameData.data]
  ) as GameApiResponse;

  const gameFavorite = useSelector((state) =>
    data ? isGameInFavoritesSelector(state, data.id) : false
  );

  const dispatch = useDispatch();

  const override = css`
    margin-top: 100px;
  `;

  const dispatchFavoriteGames = () => {
    if (gameFavorite) {
      dispatch(removeGameFromFavorite(data.id));
    } else {
      dispatch(
        setGameToFavorite({
          id: data.id,
          title: data.title,
          thumbnail: data.thumbnail,
          genre: data.genre,
          platform: data.platform,
          release_date: data.release_date,
        })
      );
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {gameData.isLoading ? (
        <RingLoader size={200} speedMultiplier={3} css={override} />
      ) : (
        <div className={styles.gameWrapper}>
          <span className={styles.gameTitle}>{data.title}</span>
          <div className={styles.gameMainInfo}>
            <img
              src={data.thumbnail ? data.thumbnail : unavailable}
              alt={data.title}
              className={styles.gamePoster}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={gameFavorite ? IconFavoriteFill : IconFavorite}
              onClick={dispatchFavoriteGames}
              alt="Add to Favorite"
              className={styles.favorite}
            />
            <div className={styles.gameTextInfo}>
              <span>
                <b>Developer: </b>
                {data.developer}
              </span>
              <span>
                <b>Genre: </b>
                {data.genre}
              </span>
              <span>
                <b>Release Date: </b>
                {data.release_date}
              </span>
              <span>
                <b>Platform: </b>
                {data.platform}
              </span>
              <h4>Minimum System Requirements</h4>
              <span>
                <b>OS: </b>
                {data.minimum_system_requirements
                  ? data.minimum_system_requirements.os
                  : "Web Game"}
              </span>
              <span>
                <b>Processor: </b>
                {data.minimum_system_requirements
                  ? data.minimum_system_requirements.processor
                  : "Web Game"}
              </span>
              <span>
                <b>Graphics: </b>
                {data.minimum_system_requirements
                  ? data.minimum_system_requirements.graphics
                  : "Web Game"}
              </span>
              <span>
                <b>Storage: </b>
                {data.minimum_system_requirements
                  ? data.minimum_system_requirements.storage
                  : "Web Game"}
              </span>
              <span>
                <b>Memory: </b>
                {data.minimum_system_requirements
                  ? data.minimum_system_requirements.memory
                  : "Web Game"}
              </span>
            </div>
          </div>
          <div className={styles.gameDescription}>
            <h2>Game description</h2>
            <p>{data.description}</p>
          </div>
          <h4>Screenshots</h4>
          <div className={styles.screenshotsList}>
            {data.screenshots.map((s) => (
              <ScreenshotModal s={s} key={s.id} />
            ))}
          </div>
          <form action={data.game_url}>
            <button className="bttn-gradient bttn-lg bttn-success">
              DOWNLOAD
            </button>
          </form>
          <CommentsList id={data.id} />
        </div>
      )}
    </div>
  );
};
