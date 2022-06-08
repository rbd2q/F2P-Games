import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

import CommentsList from "../../components/CommentsList/CommentsList";
import { unavailable } from "../../config/config";
import { removeGameFromFavorite, setGameToFavorite } from "../../store/actions";
import { isGameInFavoritesSelector } from "../../store/selectors";
import styles from "./GamePage.module.scss";
import IconFavorite from "./img/Like.svg";
import IconFavoriteFill from "./img/Like-fill.svg";
import ScreenshotModal from "./ScreenshotModal";

function GamePage() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const gameFavorite = useSelector((state) =>
    content ? isGameInFavoritesSelector(state, content.id) : false
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const override = css`
    margin-top: 100px;
  `;

  const dispatchFavoriteGames = () => {
    if (gameFavorite) {
      dispatch(removeGameFromFavorite(content.id));
    } else {
      dispatch(
        setGameToFavorite({
          id: content.id,
          title: content.title,
          thumbnail: content.thumbnail,
          genre: content.genre,
          platform: content.platform,
          release_date: content.release_date,
        })
      );
    }
  };

  const gamePageFetch = async () => {
    const { data } = await axios.get(`/api/game?id=${id}`);
    setContent(data);
    setLoading(true);
  };

  useEffect(() => {
    gamePageFetch();
  }, [id]);

  return (
    <div className={styles.pageWrapper}>
      {!loading ? (
        <RingLoader size={200} speedMultiplier={3} css={override} />
      ) : (
        <div className={styles.gameWrapper}>
          <span className={styles.gameTitle}>{content.title}</span>
          <div className={styles.gameMainInfo}>
            <img
              src={content.thumbnail ? content.thumbnail : unavailable}
              alt={content.title}
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
                {content.developer}
              </span>
              <span>
                <b>Genre: </b>
                {content.genre}
              </span>
              <span>
                <b>Release Date: </b>
                {content.release_date}
              </span>
              <span>
                <b>Platform: </b>
                {content.platform}
              </span>
              <h4>Minimum System Requirements</h4>
              <span>
                <b>OS: </b>
                {content.minimum_system_requirements
                  ? content.minimum_system_requirements.os
                  : "Web Game"}
              </span>
              <span>
                <b>Processor: </b>
                {content.minimum_system_requirements
                  ? content.minimum_system_requirements.processor
                  : "Web Game"}
              </span>
              <span>
                <b>Graphics: </b>
                {content.minimum_system_requirements
                  ? content.minimum_system_requirements.graphics
                  : "Web Game"}
              </span>
              <span>
                <b>Storage: </b>
                {content.minimum_system_requirements
                  ? content.minimum_system_requirements.storage
                  : "Web Game"}
              </span>
              <span>
                <b>Memory: </b>
                {content.minimum_system_requirements
                  ? content.minimum_system_requirements.memory
                  : "Web Game"}
              </span>
            </div>
          </div>
          <div className={styles.gameDescription}>
            <h2>Game description</h2>
            <p>{content.description}</p>
          </div>
          <h4>Screenshots</h4>
          <div className={styles.screenshotsList}>
            {content.screenshots.map((s) => (
              <ScreenshotModal s={s} key={s.id} />
            ))}
          </div>
          <form action={content.game_url}>
            <button className="bttn-gradient bttn-lg bttn-success">
              DOWNLOAD
            </button>
          </form>
          <CommentsList currentUserId="1" id={content.id} />
        </div>
      )}
    </div>
  );
}

export default GamePage;
