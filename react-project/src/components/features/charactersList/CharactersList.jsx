import styles from "./charactersList.module.css";

import { CardItem } from "../..";
import { Spinner } from "../spinner";
import { lowered } from "../../../utils/strings";
import { useMemo } from "react";
import { useCharacters } from "../../../api/hooks/useCharacters";

const NOT_EXISTED_IMG = "image_not_available";
const DEFAULTS = {
  chars: [],
};

export function CharactersList({ className, searchQuery }) {
  const { data, error, isLoading } = useCharacters({ limit: 100 });
  const chars = data || DEFAULTS.chars;

  const filteredChars = useMemo(
    () =>
      chars.filter(
        (item) =>
          !item.thumbnail.path.includes(NOT_EXISTED_IMG) &&
          lowered(item.name).includes(lowered(searchQuery))
      ),
    [chars, searchQuery]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>"Error fetching data"</p>}

      <ul className={`${styles.cardList} ${className}`}>
        {filteredChars.map((item) => (
          <CardItem
            className={styles.cardListItem}
            key={item.name + item.id}
            to={`/characters/${item.id}/comics`}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            caption={item.name}
          />
        ))}
      </ul>
    </>
  );
}
