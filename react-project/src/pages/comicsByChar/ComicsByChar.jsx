import styles from "./comicsByChar.module.css";
import { useParams } from "react-router-dom";
import { useComicsByChar } from "./../../api";
import { CardItem, Title, Spinner } from "./../../components";

const DEFAULT = {
  comicsByChar: [],
  comicsLimit: 20,
};

export function ComicsByChar({}) {
  const { charId } = useParams();
  const { data, isLoading, error } = useComicsByChar(charId, {
    limit: DEFAULT.comicsLimit,
  });
  const comicsByChar = data || DEFAULT.comicsByChar;

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Error fetching data</p>}
      {data && (
        <section>
          <Title>Comics</Title>
          <ul className={styles.cardList}>
            {comicsByChar.map((item) => (
              <CardItem
                className={styles.cardListItem}
                key={item.id}
                to={`/comics/${item.id}`}
                caption={item.title}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
