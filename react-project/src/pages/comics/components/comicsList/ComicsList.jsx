import styles from "./comicsList.module.css";
import { CardItem } from "../../../../components";
import { Spinner } from "./../../../../components/features/spinner";
import { lowered } from "../../../../utils/strings";
import { useComics } from "../../../../api/hooks/useComics";
import { useMemo } from "react";

const NOT_EXISTED_IMG = "image_not_available";

const DEFAULTS = {
  comics: [],
};

export function ComicsList({ className, searchQuery }) {
  const { data, loading, error } = useComics({ limit: 100 });

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

  return loading ? (
    <Spinner />
  ) : (
    <ul className={`${styles.cardList} ${className}`}>
      {filteredComics.map((item) => (
        <CardItem
          className={styles.cardListItem}
          key={item.title + item.id}
          to={`/comics/${item.id}/series}`}
          itemImage={item.thumbnail}
          itemCaption={item.title}
        />
      ))}
    </ul>
  );
}
