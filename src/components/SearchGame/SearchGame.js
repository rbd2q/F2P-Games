import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './SearchGame.module.scss'
import {useHistory} from "react-router-dom";

export default function SearchGame() {
  const [allGames, setAllGames] = useState([]);
  const history = useHistory();

  const allGameFetch = async () => {
    const {data} = await axios.get('/api/games');
    setAllGames(data);
  }

  useEffect(() => {
    allGameFetch();
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const searchGame = allGames.find(game => game.title === e.target.value)
      searchGame ? history.push(`/game/detail/${searchGame.id}`) : history.push('/notFound');
      e.target.value = '';
    }
  }

  return (
    <Stack spacing={2} className={styles.inputWrapper}>
      <Autocomplete
        id="free-solo-2-demo"
        disableClearable
        noOptionsText={'There is no such game :('}
        onKeyDown={handleKeyDown}
        options={allGames.map((game) => game.title)}
        renderInput={(params) => (
          <TextField
            className={styles.searchInput}
            {...params}
            label="Search Game"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              className: styles.searchInput,
            }}
          />
        )}
      />
    </Stack>
  );
}