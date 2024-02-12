import styles from "./comicsList.module.css";
import { CardItem } from "..";
import { Spinner } from "..";
import { lowered } from "../../../utils/strings";
import { useMemo } from "react";
import { useComics } from "../../../api/hooks/useComics";

const NOT_EXISTED_IMG = "image_not_available";
const DEFAULTS = {
  comics: [],
};

export function ComicsList({ className, searchQuery }) {
  const { data, isLoading, error } = useComics({ limit: 100 });
  if (error) throw new Error("Error fetching data");

  const comics = data || DEFAULTS.comics;

  const filteredComics = useMemo(
    () =>
      comics.filter(
        (item) =>
          !item.thumbnail.path.includes(NOT_EXISTED_IMG) &&
          lowered(item.title).includes(lowered(searchQuery))
      ),
    [comics, searchQuery]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Error Fetching data</p>}
      <ul className={`${styles.cardList} ${className}`}>
        {filteredComics.map((item) => (
          <>
            <CardItem
              className={styles.cardListItem}
              key={item.id + item.title}
              to={`/comics/${item.id}}`}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              caption={item.title}
            />
          </>
        ))}
      </ul>
    </>
  );
}
