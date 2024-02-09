import styles from "./customLink.module.css";
import { Link, useMatch, useLocation } from "react-router-dom";

export function CustomLink({ to, children, className }) {
  const match = useMatch(to);
  const location = useLocation();
  const setMatch = match ? styles.active : "";

  const handleClick = (e) => {
    if (to === location.pathname) {
      e.preventDefault();
    }
  };

  return (
    <Link
      className={`${className} ${setMatch}`}
      to={to}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </Link>
  );
}
