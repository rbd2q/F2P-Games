import { useQuery, UseQueryResult } from "react-query";

import { GamesApiResponse } from "../../types";
import { browserGamesApi } from "./browserGamesApi";

export const useFetchPCGames = (
  genre: string,
  sort: string
): UseQueryResult<GamesApiResponse[]> =>
  useQuery(["browser games", `genre:${genre}`], () =>
    browserGamesApi(genre, sort)
  );
