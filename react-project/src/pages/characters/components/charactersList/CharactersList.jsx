import styles from "./charactersList.module.css";
import { useData } from "../../../../hooks/useData";
import { getAllChars } from "../../../../api/requests";
import { CardItem } from "../../../../components";
import { Spinner } from "./../../../../components/features/spinner";
import { lowered } from "../../../../utils/strings";

const NOT_EXISTED_IMG = "image_not_available";

export function CharactersList({ className, searchQuery }) {
  const { data: chars, loading: loadingChars } = useData(getAllChars(), []);

  const filteredChars = chars.filter(
    (item) =>
      !item.thumbnail.path.includes(NOT_EXISTED_IMG) &&
      lowered(item.name).includes(lowered(searchQuery))
  );

  return loadingChars ? (
    <Spinner />
  ) : (
    <ul className={`${styles.cardList} ${className}`}>
      {filteredChars.map((item) => (
        <CardItem
          className={styles.cardListItem}
          key={item.name + item.id}
          to={`/characters/${item.id}/comics`}
          itemImage={item.thumbnail}
          itemCaption={item.name}
        />
      ))}
    </ul>
  );
}
