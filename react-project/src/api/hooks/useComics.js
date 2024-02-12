import { getAllComics } from "../requests";
import useSWR from "swr";
import { BASE_URL, END_POINTS } from "../config";
import { buildKey } from "../../lib/swr";

export const useComics = (params) => {
  const { data, error, isLoading } = useSWR(
    buildKey(`${BASE_URL}${END_POINTS.allComics}`, params),
    () => getAllComics(params)
  );

  return {
    data: data ? data.data.data.results : undefined,
    error,
    isLoading,
  };
};
