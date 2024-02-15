import styles from "./dailyCollection.module.css";
import { useCallback, useEffect, useState, useRef } from "react";
import { AnimatedPage } from "../../components/animated/animatedPage/AnimatedPage";
import { useComics } from "../../api/hooks/useComics";
import {
  Error,
  CardItem,
  Spinner,
  Title,
  Text,
  Button,
} from "../../components";

const DEFAULT = {
  comics: [],
  limit: 10,
  NOT_EXISTED_IMG: "image_not_available",
  FETCH_ERROR: "Error fetching data",
  IMG_NOT_FOUND_WARN: "Sorry, try tomorrow",
};

export function DailyCollection() {
  const { data, isLoading, error } = useComics({ limit: DEFAULT.limit });
  const comics = data || DEFAULT.comics;
  const spliced = useRef();

  const filteredComics = comics.filter(
    (item) => !item.thumbnail.path.includes(DEFAULT.NOT_EXISTED_IMG)
  );

  const changeHandler = (index) =>
    (spliced.current = filteredComics.splice(index, 1));

  return (
    <AnimatedPage>
      {isLoading && <Spinner />}
      {error && <Error msg={DEFAULT.FETCH_ERROR} />}
      {!isLoading && !filteredComics.length && (
        <Error msg={DEFAULT.IMG_NOT_FOUND_WARN} />
      )}
      <Title>hurry up to add</Title>
      <Text>today's comic book collection</Text>
      <ul className={styles.cardList}>
        {filteredComics.map((item, index) => (
          <div key={"wrapper" + item.id + item.title}>
            <CardItem
              className={styles.cardListItem}
              key={item.id + item.title}
              to={`/comics/${item.id}}`}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              caption={item.title}
            />
            <Button
              key={"add-button" + item.id + item.title}
              className={styles.addBtn}
              type="button"
              handle={() => changeHandler(index)}
            >
              Add
            </Button>
          </div>
        ))}
      </ul>
    </AnimatedPage>
  );
}
