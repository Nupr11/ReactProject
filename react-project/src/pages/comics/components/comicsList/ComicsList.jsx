import styles from "./comicsList.module.css";
import { useData } from "../../../../hooks/useData";
import { getAllComics } from "../../../../api/requests";
import { CardItem } from "../../../../components";
import { Spinner } from "./../../../../components/features/spinner";
import { lowered } from "../../../../utils/strings";

const NOT_EXISTED_IMG = "image_not_available";

export function ComicsList({ className, searchQuery }) {
  const { data: comics, loading: loadingComics } = useData(getAllComics(), []);

  const filteredComics = comics.filter(
    (item) =>
      !item.thumbnail.path.includes(NOT_EXISTED_IMG) &&
      lowered(item.title).includes(lowered(searchQuery))
  );

  return loadingComics ? (
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
