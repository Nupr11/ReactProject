import { getComicsByChar } from "../requests";
import useSWR from "swr";
import { BASE_URL, END_POINTS } from "../config";
import { buildKey } from "../../lib/swr";

export const useComicsByChar = (charId, params) => {
  const { data, error, isLoading } = useSWR(
    buildKey(`${BASE_URL}${END_POINTS.allChars}/${charId}/comics`, params),
    () => getComicsByChar(charId, params),
    { revalidate: false }
  );

  return {
    data: data ? data.data.data.results : undefined,
    error,
    isLoading,
  };
};
