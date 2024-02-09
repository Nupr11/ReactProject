import { Link } from "react-router-dom";
import styles from "./cardItem.module.css";

export function CardItem({ to, itemImage, itemCaption }) {
  const cardListItem = (
    <figure className={styles.card}>
      <img
        className={styles.img}
        src={`${itemImage.path}.${itemImage.extension}`}
        alt={itemCaption}
      />
      <figcaption>{itemCaption}</figcaption>
    </figure>
  );
  return (
    <li className={styles.cardListItem}>
      <Link to={to}>{cardListItem}</Link>
    </li>
  );
}
