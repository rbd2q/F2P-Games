import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useMemo } from "react";

import { useFetchAllGames } from "../../Pages/AllGames/model";
import styles from "./SearchGame.module.scss";

// TODO
export const SearchGame = () => {
  const gamesData = useFetchAllGames();
  const data = useMemo(() => gamesData.data || [], [gamesData.data]);

  return (
    <Stack spacing={2} className={styles.inputWrapper}>
      <Autocomplete
        id="free-solo-2-demo"
        noOptionsText="There is no such game :("
        options={data.map((game) => game.title)}
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
};
