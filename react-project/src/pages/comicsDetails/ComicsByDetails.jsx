import styles from "./comicsByDetails.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDetailsByComics } from "../../api";
import { Text, Title, Spinner } from "../../components";
import { generateContent } from "../../utils/generateLorem";

const DEFAULT = {
  comic: {},
};
export function ComicsByDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailsByComics(id, {
    limit: 10,
  });

  const comic = data?.[0] || DEFAULT.character;
  console.log(comic?.available);

  return (
    <div>
      {error && <p>Something go wrong with fetching data</p>}
      {isLoading && <Spinner />}
      {data && (
        <section>
          <Title> {comic.title} details: </Title>
          <div className={styles.charInfo}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              width={200}
              height={300}
            />
            <Text className={styles.text}>
              {comic.description ? comic.description : generateContent(20)}
            </Text>
          </div>
          <Title>other characters:</Title>
          <ul className={styles.comicsList}>
            {comic?.characters?.items.map((item, index) => (
              <li key={comic.id + index}>
                <Link
                  to={`/characters/${item.resourceURI.split("/").slice(-1)[0]}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
