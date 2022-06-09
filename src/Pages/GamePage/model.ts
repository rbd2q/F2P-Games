import { useQuery, UseQueryResult } from "react-query";

import { GameApiResponse } from "../../types";
import { singleGameApi } from "./singleGameApi";

export const useFetchGame = (id: string): UseQueryResult<GameApiResponse> =>
  useQuery(["single game", `id:${id}`], () => singleGameApi(id));
