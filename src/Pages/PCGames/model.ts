import { useQuery, UseQueryResult } from "react-query";

import { GamesApiResponse } from "../../types";
import { PCGamesApi } from "./PCGamesApi";

export const useFetchPCGames = (
  genre: string,
  sort: string
): UseQueryResult<GamesApiResponse[]> =>
  useQuery(["PC Games", `genre:${genre}`], () => PCGamesApi(genre, sort));
