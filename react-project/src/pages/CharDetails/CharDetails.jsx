import styles from "./charDetails.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDetailsByChar } from "./../../api";
import { Text, Title, Spinner } from "./../../components";
import { generateContent } from "../../utils/generateLorem";
import { AnimatedPage } from "../../components/animated/animatedPage/AnimatedPage";
import { sliceUrlEnd } from "../../utils/strings";

const DEFAULT = {
  character: {},
  comics: [],
  limit: 20,
};
export function CharDetails() {
  const { charId } = useParams();
  const { data, isLoading, error } = useDetailsByChar(charId, {
    limit: DEFAULT.limit,
  });
  const character = data?.[0] || DEFAULT.character;

  return (
    <AnimatedPage>
      {error && <p>Something go wrong with fetching data</p>}
      {isLoading && <Spinner />}
      {data && (
        <section>
          <Title> {character?.name} details: </Title>
          <div className={styles.charInfo}>
            <img
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              alt={character?.name}
              width={200}
              height={300}
            />
            <Text className={styles.text}>
              {character?.description
                ? character.description
                : generateContent(20)}
            </Text>
          </div>
          <Title>Comics with {character?.name}</Title>
          <ul className={styles.comicsList}>
            {character?.comics?.items.map((item) => (
              <li key={item?.name + item?.resourceURI}>
                <Link to={`/comics/${sliceUrlEnd(item.resourceURI)}`}>
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </AnimatedPage>
  );
}
// to={`/characters/${item.resourceURI.split("/").slice(-1)[0]}`}
