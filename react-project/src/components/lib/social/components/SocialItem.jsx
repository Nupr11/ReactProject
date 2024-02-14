import styles from "./socialItem.module.css";
import { HandySvg } from "handy-svg";
import { Link } from "react-router-dom";

export const SocialItem = ({ className, icon }) => {
  const svgIcon = (
    <HandySvg
      className={styles.svg}
      src={icon.path}
      alt={icon.title}
      width={icon.width}
      height={icon.width}
    />
  );
  return (
    <Link to={`/${icon.to}`}>
      <li className={`${className} ${styles.socialItem}`}>{svgIcon}</li>
    </Link>
  );
};
