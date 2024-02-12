import styles from "./info.module.css";
import { lowered } from "./../../../utils/strings";

export function Info({ info }) {
  const infoList = Object.entries(info).map(([key, value], index) => (
    <li key={index} className={styles.infoItem}>
      <span className={styles.infoItemName}>{key}:</span>
      {lowered(key) === "email" ? (
        <a href={`mailto:${value}`}>{value}</a>
      ) : lowered(key) === "phone" ? (
        <a href={`tel:${value}`}>{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </li>
  ));

  return <ul className={styles.infoList}>{infoList}</ul>;
}
