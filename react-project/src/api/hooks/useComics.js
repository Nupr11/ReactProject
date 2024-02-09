import { getAllComicsSWR } from "../requests";
import useSWR from "swr";
import { useMemo } from "react";
import { BASE_URL, END_POINTS } from "../config";
import { buildKey } from "../../lib/swr";

export const useComics = (params) => {
  const { data, error, isLoading } = useSWR(
    buildKey(`${BASE_URL}${END_POINTS.allComics}`, params),
    () => getAllComicsSWR(params),
    { revalidate: false }
  );

  const comics = useMemo(
    () => (data ? data.data.data.results : undefined),
    [data]
  );

  return {
    data: comics,
    error,
    isLoading,
  };
};
