import styles from "./cardItem.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";

function Component({ to, src, caption }) {
  const cardListItem = (
    <figure className={styles.card}>
      <img className={styles.img} src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
  return (
    <li className={styles.cardListItem}>
      <Link to={to}>{cardListItem}</Link>
    </li>
  );
}

const CardItem = memo(Component);

export { CardItem };
