import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

import { CommentsList } from "../../components/CommentsList/CommentsList";
import { unavailable } from "../../config/config";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/reducers/favoriteReducer";
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

  const gameFavorite = useSelector((state): boolean =>
    isGameInFavoritesSelector(state, data.id)
  );

  const dispatch = useDispatch();

  const dispatchFavoriteGames = () => {
    if (gameFavorite) {
      dispatch(removeFromFavorite(data.id));
    } else {
      dispatch(
        addToFavorite({
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
        <div className="my-44 flex items-center justify-center">
          <RingLoader size={200} speedMultiplier={3} />
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-screen px-3 md:px-5">
          <div className="mb-8 font-semibold text-2xl md:text-4xl flex justify-center">
            {data.title}
            <button onClick={dispatchFavoriteGames}>
              <img
                src={gameFavorite ? IconFavoriteFill : IconFavorite}
                alt="Add to Favorite"
                className={styles.favorite}
              />
            </button>
          </div>

          <div className={styles.gameMainInfo}>
            <img
              src={data.thumbnail ? data.thumbnail : unavailable}
              alt={data.title}
              className={styles.gamePoster}
            />

            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-bold">Developer: </span>
                {data.developer}
              </div>
              <div className="mb-2">
                <span className="font-bold">Genre: </span>
                {data.genre}
              </div>
              <div className="mb-2">
                <span className="font-bold">Release Date: </span>
                {data.release_date}
              </div>
              <div className="mb-2">
                <span className="font-bold">Platform: </span>
                {data.platform}
              </div>
              {data.platform === "Windows" && (
                <>
                  <h4 className="font-bold my-4">
                    Minimum System Requirements
                  </h4>
                  <div className="mb-2">
                    <span className="font-bold">OS: </span>
                    {data.minimum_system_requirements
                      ? data.minimum_system_requirements.os
                      : ""}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Processor: </span>
                    {data.minimum_system_requirements
                      ? data.minimum_system_requirements.processor
                      : ""}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Graphics: </span>
                    {data.minimum_system_requirements
                      ? data.minimum_system_requirements.graphics
                      : ""}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Storage: </span>
                    {data.minimum_system_requirements
                      ? data.minimum_system_requirements.storage
                      : ""}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Memory: </span>
                    {data.minimum_system_requirements
                      ? data.minimum_system_requirements.memory
                      : ""}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold mt-10 mb-4">Game description</h2>
            <p>{data.description}</p>
          </div>
          {data.screenshots.length ? (
            <>
              <h4 className="font-bold mt-10 mb-4">Screenshots</h4>
              <div className={styles.screenshotsList}>
                {data.screenshots.map((s) => (
                  <ScreenshotModal s={s} key={s.id} />
                ))}
              </div>
            </>
          ) : null}

          <form action={data.game_url}>
            <button className="bttn-gradient bttn-lg bttn-success mt-5">
              DOWNLOAD
            </button>
          </form>
          <CommentsList id={data.id} />
        </div>
      )}
    </div>
  );
};
