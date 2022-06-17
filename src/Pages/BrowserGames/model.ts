import { useQuery, UseQueryResult } from "react-query";

import { GamesApiResponse } from "../../types";
import { browserGamesApi } from "./browserGamesApi";

export const useFetchBrowserGame = (
  genre: string,
  sort: string
): UseQueryResult<GamesApiResponse[]> =>
  useQuery(["browser games", `genre:${genre} sort:${sort}`], () =>
    browserGamesApi(genre, sort)
  );
