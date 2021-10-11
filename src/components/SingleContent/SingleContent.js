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
    window.scroll(0, 0)
    history.push(`/game/detail/id=${id}`)
  }

  //Пришлось наговнокодить из-за разных данных приходящих с сервера //TODO
  const checkBudgeContent = () => {
    if (platform === 'PC (Windows)') {
      return 'PC'
    } else if (platform === "Web Browser") {
      return 'Web'
    }
    return 'PC'
  }
  const checkBudgeColor = () => {
    if (platform === 'PC (Windows)') {
      return 'primary'
    } else if (platform === "Web Browser") {
      return 'secondary'
    }
    return 'primary'
  }

  return (
    <div className={styles.gameBlock} onClick={handleClick}>
      <Badge
        badgeContent={checkBudgeContent()}
        color={checkBudgeColor()}
        //badgeContent={platform === 'PC (Windows)' ? 'PC' : 'Web'} //TODO
        //color={platform === 'PC (Windows)' ? 'primary' : 'secondary'}
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