import React, {useEffect, useState} from 'react';
import styles from './GamePage.module.scss'
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {unavailable} from "../../config/config";
import {RingLoader} from "react-spinners";

const GamePage = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const history = useHistory();

  const gamePageFetch = async () => {
    const {data} = await axios.get(`/api/game?id=${id}`);


    console.log(data);
    setContent(data);
    setLoading(true);
  };

  const handleDownload = () => {

  }

  useEffect(() => {
    gamePageFetch();
  }, [id])

  return (
    <div className={styles.pageWrapper}>
      {!loading ? (<RingLoader size={200} speedMultiplier={3}/>) : (
        <div className={styles.gameWrapper}>
          <span className={styles.gameTitle}>{content.title}</span>
          <div className={styles.gameMainInfo}>
            <img
              src={content.thumbnail ? content.thumbnail : unavailable}
              alt={content.title}
              className={styles.gamePoster}
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
                {content.minimum_system_requirements? content.minimum_system_requirements.os : 'Web Game'}
              </span>
              <span>
                <b>Processor: </b>
                {content.minimum_system_requirements? content.minimum_system_requirements.processor : 'Web Game'}
              </span>
              <span>
                <b>Graphics: </b>
                {content.minimum_system_requirements ? content.minimum_system_requirements.graphics : 'Web Game'}
              </span>
              <span>
                <b>Storage: </b>
                {content.minimum_system_requirements? content.minimum_system_requirements.storage : 'Web Game'}
              </span>
              <span>
                <b>Memory: </b>
                {content.minimum_system_requirements? content.minimum_system_requirements.memory : 'Web Game'}
              </span>
            </div>
          </div>
          <div>
            <h2>Game description</h2>
            <p>{content.description}</p>
          </div>
          <h4>Screenshots</h4>
          <div className={styles.screenshotsList}>
            {content.screenshots.map((s) =>
              <img
                src={s.image} className={styles.screenshot}
                alt={`There should be a screenshot, but this API sucks :(`}
              />
            )}
          </div>
          <form action={content.game_url}>
            <button className="bttn-gradient bttn-lg bttn-success">DOWNLOAD</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GamePage;