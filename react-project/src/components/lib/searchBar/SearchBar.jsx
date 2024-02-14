import styles from "./searchBar.module.css";
import { useCallback, useRef, useEffect } from "react";
// import { Input } from "../input";

const DEFAULT = {
  DEBOUNCE_DELAY: 1000,
  FOCUS_ONLOAD_DELAY: 2000,
};

export function SearchBar({ className, infoKind, onSearch }) {
  const focused = useRef();

  const DebouncedSearch = useCallback(
    (searchData) => {
      const setDebounce = setTimeout(() => {
        onSearch(searchData);
      }, DEFAULT.DEBOUNCE_DELAY);
      return () => clearTimeout(setDebounce);
    },
    [onSearch]
  );

  const handleFocus = () => {
    setTimeout(() => {
      focused.current.focus();
    }, DEFAULT.FOCUS_ONLOAD_DELAY);
  };

  const handleChange = (e) => {
    DebouncedSearch(e.target.value);
  };

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <label className={`${className} ${styles.searchBar}`}>
      <span>{`Find your favorite ${infoKind}:`}</span>
      <input
        type="text"
        placeholder={`Search ${infoKind}`}
        className={styles.input}
        onChange={handleChange}
        ref={focused}
      />
    </label>

    // <Input
    //   className={`${className} ${styles.searchBar}`}
    //   type="text"
    //   label={`Find your favorite ${infoKind}`}
    //   placeholder={`Search ${infoKind}`}
    //   handler={handleChange}
    //   ref={focused}
    // />
  );
}
