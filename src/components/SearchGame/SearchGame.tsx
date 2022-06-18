import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { useFetchAllGames } from "../../Pages/AllGames/model";
import styles from "./SearchGame.module.css";

export const SearchGame = () => {
  const history = useHistory();
  const gamesData = useFetchAllGames();
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);
  const gamesForSearch = data.map((game) => game.title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const searchGame = data.find((game) => game.title === e.target.value);
      if (searchGame) {
        history.push(`/game/detail/${searchGame.id}`);
      }
    }
  };

  return (
    <Stack spacing={2} className={styles.inputWrapper}>
      <Autocomplete
        id="free-solo-2-demo"
        noOptionsText="There is no such game :("
        options={gamesForSearch}
        disableClearable
        onKeyDown={handleKeyDown}
        renderInput={(params) => (
          <TextField
            className={styles.searchInput}
            {...params}
            placeholder="Game search"
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
};
