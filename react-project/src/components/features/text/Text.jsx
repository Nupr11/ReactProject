import styles from "./text.module.css";

export function Text({ className, children }) {
  return <p className={`${className} ${styles.text}`}>{children}</p>;
}
