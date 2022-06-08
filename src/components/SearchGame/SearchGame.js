import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./SearchGame.module.scss";

export default function SearchGame() {
  const [allGames, setAllGames] = useState([]);

  const allGameFetch = async () => {
    const { data } = await axios.get("/api/games");
    setAllGames(data);
  };

  useEffect(() => {
    allGameFetch();
  }, []);

  return (
    <Stack spacing={2} className={styles.inputWrapper}>
      <Autocomplete
        id="free-solo-2-demo"
        noOptionsText="There is no such game :("
        options={allGames.map((game) => game.title)}
        renderInput={(params) => (
          <TextField
            className={styles.searchInput}
            {...params}
            label="Search Game"
            InputProps={{
              ...params.InputProps,
              type: "search",
              className: styles.searchInput,
            }}
          />
        )}
      />
    </Stack>
  );
}
