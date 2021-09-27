import React, {useEffect, useState} from 'react';
import styles from './AllGames.module.scss';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
/*import CustomPagination from "../../components/CustomPagination/CustomPagination";*/ //TODO


const AllGames = () => {
  /*const [page, setPage] = useState(1)*/ //TODO
  const [content, setContent] = useState([]);

  const allGamesFetch = async () => {
    const {data} = await axios.get(`/api/games`);


    console.log(data);
    setContent(data)
  };

  useEffect(() => {
    allGamesFetch()
  }, [])

  return (
    <div>
      <span className={styles.pageTitle}>All Games</span>
      <div className={styles.gamesWrapper}>
        {content && content.map((c) =>
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title}
                platform={c.platform}
                genre={c.genre}
                thumbnail={c.thumbnail}
                release_date={c.release_date}
              />
          )}
      </div>
      {/*<CustomPagination setPage={setPage}/>*/} //TODO
    </div>
  );
};

export default AllGames;