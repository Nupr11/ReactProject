import styles from "./chars.module.css";
import { useState } from "react";
import {
  AnimatedPage,
  CharactersList,
  Text,
  Title,
  SearchBar,
} from "../../components";

export function Chars() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <AnimatedPage>
      <section>
        <Title>look for your favorites characters</Title>
        <Text>
          Here are the most iconic heroes from across the multiverse, each with
          their own unique powers, backgrounds, and destinies. From the cosmic
          realms to the gritty streets of urban landscapes, this diverse roster
          of characters embodies the essence of heroism in all its forms.
          Discover legendary figures like Superman, Wonder Woman, and
          Spider-Man, whose unwavering courage inspires hope in the darkest of
          times. Explore the depths of their heroic journeys as they face
          formidable foes, grapple with moral dilemmas, and strive to protect
          the innocent. Join them on epic adventures filled with action,
          suspense, and the enduring triumph of good over evil. Welcome to a
          world where heroes rise, legends are born, and the battle between
          light and darkness rages on.
        </Text>
        <SearchBar
          className={styles.searchBar}
          infoKind="character"
          onSearch={handleSearch}
        />
        <CharactersList className={styles.cardList} searchQuery={searchQuery} />
      </section>
    </AnimatedPage>
  );
}
