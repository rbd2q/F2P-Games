import React from 'react';
import {unavailable} from "../../config/config";
import styles from './SingleContent.module.scss'
import {Badge} from "@material-ui/core";
import {useHistory} from "react-router-dom";


const SingleContent = (
  {
    id,
    title,
    genre,
    platform,
    thumbnail,
    release_date
  }
) => {

  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/detail/id=${id}`)
  }

  return (
    <div className={styles.gameBlock} onClick={handleClick}>
      <Badge
        badgeContent={platform === 'PC (Windows)' ? 'PC' : 'Web'}
        color={platform === 'PC (Windows)' ? 'primary' : 'secondary'}
      />
      <img className={styles.thumbnail} src={thumbnail ? thumbnail : unavailable}  alt={title}/>
      <b className={styles.title}>{title}</b>
      <div className={styles.gameInfo}>
        <span>{genre}</span>
        <span>{release_date}</span>
      </div>
    </div>
  );
};

export default SingleContent;