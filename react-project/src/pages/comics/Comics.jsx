import styles from "./comics.module.css";
import React, { useState } from "react";
import {
  AnimatedPage,
  ComicsList,
  SearchBar,
  Spinner,
  Text,
  Title,
} from "./../../components";

export function Comics() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <AnimatedPage>
      <section className={styles.comics}>
        <>
          <Title>look for your favorites comics</Title>
          <Text>
            Welcome to our collection of thrilling comics! Dive into a universe
            filled with captivating stories, vibrant characters, and stunning
            artwork. Here, you'll find an extensive library of comic series
            spanning genres like action, adventure, fantasy, sci-fi, and more.
          </Text>
          <Text>
            Explore the pages of iconic superheroes saving the world, unravel
            mysteries with detective comics, embark on epic journeys across
            galaxies, or indulge in heartwarming tales of friendship and
            courage.
          </Text>
          <Text>
            Our collection features a diverse range of comics to suit every
            taste and preference. Whether you're a seasoned comic enthusiast or
            a newcomer to the world of graphic storytelling, there's something
            here for everyone. Get ready to immerse yourself in the captivating
            narratives and vivid illustrations that await you in our comic
            section.
          </Text>
          <SearchBar
            className={styles.searchBar}
            infoKind="comics"
            onSearch={handleSearch}
          />
        </>
        <ComicsList className={styles.cardList} searchQuery={searchQuery} />
      </section>
    </AnimatedPage>
  );
}
