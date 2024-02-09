import { Link } from "react-router-dom";
import styles from "./sliderCardInfo.module.css";

export const SliderCardInfo = ({ className, to, children }) => {
  return (
    <div className={`${className} ${styles.cardInfo}`}>
      <Link to={to}>
        <span className={styles.text}>Show {children} Collection</span>
      </Link>
    </div>
  );
};
