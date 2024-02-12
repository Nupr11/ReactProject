import styles from "./searchBar.module.css";
import { useCallback } from "react";

export function SearchBar({ className, infoKind, onSearch }) {
  const DebouncedSearch = useCallback(
    (searchData) => {
      const setDebounce = setTimeout(() => {
        onSearch(searchData);
      }, 1000);
      return () => clearTimeout(setDebounce);
    },
    [onSearch]
  );

  const handleChange = (e) => {
    DebouncedSearch(e.target.value);
  };

  return (
    <label className={`${className} ${styles.searchBar}`}>
      <span>{`Find your favorite ${infoKind}:`}</span>
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        placeholder={`Search ${infoKind}`}
      />
    </label>
  );
}
