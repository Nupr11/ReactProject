import styles from "./title.module.css";

export function Title({ children, className }) {
  return <h2 className={`${className} ${styles.title}`}>{children}</h2>;
}
