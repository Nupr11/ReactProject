import styles from "./charactersList.module.css";
import { Spinner } from "../spinner";
import { Error } from "../error";
import { useCharacters } from "../../../api/hooks/useCharacters";
import { useMemo } from "react";
import { lowered } from "../../../utils/strings";
import { CardItem } from "../..";

const DEFAULT = {
  chars: [],
  limit: 100,
  NOT_EXISTED_IMG: "image_not_available",
  FETCH_ERROR: "Error fetching data",
  IMG_NOT_FOUND_WARN: "Sorry, try else",
};

export function CharactersList({ className, searchQuery }) {
  const { data, error, isLoading } = useCharacters({ limit: DEFAULT.limit });
  const chars = data || DEFAULT.chars;

  const filteredChars = useMemo(
    () =>
      chars.filter(
        (item) =>
          !item.thumbnail.path.includes(DEFAULT.NOT_EXISTED_IMG) &&
          lowered(item.name).includes(lowered(searchQuery))
      ),
    [chars, searchQuery]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Error msg={DEFAULT.FETCH_ERROR} />}
      {!isLoading && !filteredChars.length && (
        <Error msg={DEFAULT.IMG_NOT_FOUND_WARN} />
      )}
      <ul className={`${styles.cardList} ${className}`}>
        {filteredChars.map((item) => (
          <CardItem
            className={styles.cardListItem}
            key={item?.name + item?.id}
            to={`/characters/${item?.id}/comics`}
            src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
            caption={item?.name}
          />
        ))}
      </ul>
    </>
  );
}
