import { getInfoByChar } from "../requests";
import useSWR from "swr";
import { BASE_URL, END_POINTS } from "../config";
import { buildKey } from "../../lib/swr";

export const useDetailsByChar = (charId, params) => {
  const { data, error, isLoading } = useSWR(
    buildKey(`${BASE_URL}${END_POINTS.allChars}/${charId}`, params),
    () => getInfoByChar(charId, params),
    { revalidateIfStale: false }
  );

  return {
    data: data ? data.data.data.results : undefined,
    error,
    isLoading,
  };
};
