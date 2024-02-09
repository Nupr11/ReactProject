import { useParams, Link } from "react-router-dom";
import { useData } from "../../../../hooks/useData";
import { getAllComicsByChar } from "../../../../api/requests";
import { CardItem } from "../../../../components";
import styles from "./character.module.css";

export function Character({}) {
  const { id } = useParams();
  const {
    data: comics,
    loading: loadingComics,
    error: errorComics,
  } = useData(getAllComicsByChar(id), []);
  if (loadingComics) {
    return <div>Loading...</div>;
  }
  if (errorComics) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h4>Comics with </h4>
      <ul>
        {comics.map((item) => (
          <CardItem
            className={styles.cardListItem}
            key={item.title + item.id}
            to={`/comics/${item.id}`}
            itemCaption={item.title}
            itemImage={item.thumbnail}
          />
        ))}
      </ul>
    </div>
  );
}
