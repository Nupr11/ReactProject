import styles from "./customLink.module.css";
import { Link, useMatch } from "react-router-dom";

export function CustomLink({ to, children, className }) {
  const match = useMatch(to);
  const current = match ? styles.active : "";

  const handleClick = (e) => match && e.preventDefault();

  return (
    <Link
      className={`${className} ${current}`}
      to={to}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </Link>
  );
}
