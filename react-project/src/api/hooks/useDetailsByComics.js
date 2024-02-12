import useSWR from "swr";
import { BASE_URL, END_POINTS } from "../config";
import { buildKey } from "../../lib/swr";
import { getInfoByComics } from "../requests";

export const useDetailsByComics = (id, params) => {
  const { data, error, isLoading } = useSWR(
    buildKey(`${BASE_URL}${END_POINTS.allComics}/${id}`, params),
    () => getInfoByComics(id, params),
    { revalidate: false }
  );

  return {
    data: data ? data.data.data.results : undefined,
    error,
    isLoading,
  };
};
