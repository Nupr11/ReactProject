import styles from "./comicsList.module.css";
import { CardItem } from "..";
import { Spinner } from "..";
import { lowered } from "../../../utils/strings";
import { useMemo } from "react";
import { useComics } from "../../../api/hooks/useComics";
import { Error } from "..";

const DEFAULT = {
  comics: [],
  limit: 100,
  NOT_EXISTED_IMG: "image_not_available",
  FETCH_ERROR: "Error fetching data",
  IMG_NOT_FOUND_WARN: "Sorry, try else",
};

export function ComicsList({ className, searchQuery }) {
  const { data, isLoading, error } = useComics({ limit: DEFAULT.limit });
  const comics = data || DEFAULT.comics;

  const filteredComics = useMemo(
    () =>
      comics.filter(
        (item) =>
          !item.thumbnail.path.includes(DEFAULT.NOT_EXISTED_IMG) &&
          lowered(item.title).includes(lowered(searchQuery))
      ),
    [comics, searchQuery]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Error msg={DEFAULT.FETCH_ERROR} />}
      {!isLoading && !filteredComics.length && (
        <Error msg={DEFAULT.IMG_NOT_FOUND_WARN} />
      )}
      <ul className={`${styles.cardList} ${className}`}>
        {filteredComics.map((item) => (
          <CardItem
            className={styles.cardListItem}
            key={item.id + item.title}
            to={`/comics/${item.id}}`}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            caption={item.title}
          />
        ))}
      </ul>
    </>
  );
}
