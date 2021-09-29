import React, {useEffect, useState} from 'react';
import styles from './GamePage.module.scss'
import {useParams} from "react-router-dom";
import axios from "axios";
import {unavailable} from "../../config/config";

const GamePage = () => {
  const [content, setContent] = useState([]);
  const {id} = useParams();

  const gamePageFetch = async () => {
    const {data} = await axios.get(`/api/game?id=${id}`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    gamePageFetch();
  }, [id])

  return (
    <div className={styles.gameWrapper}>
      <span className={styles.gameTitle}>{content.title}</span>
      <div className={styles.gameMainInfo}>
        <img
          src={content.thumbnail ? content.thumbnail : unavailable}
          alt={content.title}
          className={styles.gamePoster}
        />
        <span>
          <b>Developer: </b>
          {content.developer}
        </span>
      </div>

      <div>
        <h4>Game description</h4>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default GamePage;