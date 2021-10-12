import React, {useEffect, useState} from 'react';
import styles from "./Popular.module.scss"
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import { RingLoader} from "react-spinners";
import {css} from "@emotion/react";

const Popular = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const override = css`
  margin-top: 100px;
`;

  const popularGamesFetch = async () => {
    const {data} = await axios.get(`/api/games?sort-by=popularity`);


    console.log(data);
    setContent(data)
    setLoading(true);
  };

  useEffect(() => {
    popularGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>Popular</span>
      <div className={styles.navBar}></div>
      <div className={styles.gamesWrapper}>
        {!loading ? <RingLoader size={200} speedMultiplier={3} css={override} color={'white'}/> : content.map((c, index) =>
          index <= 49 ?
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title}
              platform={c.platform}
              genre={c.genre}
              thumbnail={c.thumbnail}
              release_date={c.release_date}
            /> : []
        )}
      </div>
    </div>
  );
};

export default Popular;