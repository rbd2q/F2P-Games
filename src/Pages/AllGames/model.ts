import { useQuery, UseQueryResult } from "react-query";

import { GamesApiResponse } from "../../types";
import { allGamesApi } from "./allGamesApi";

export const useFetchAllGames = (
  genre?: string,
  sort?: string
): UseQueryResult<GamesApiResponse[]> =>
  useQuery(["all games", `genre:${genre} sort:${sort}`], () =>
    allGamesApi(genre, sort)
  );
