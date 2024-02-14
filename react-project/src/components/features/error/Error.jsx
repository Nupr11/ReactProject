import styles from "./error.module.css";

export function Error({ msg }) {
  return <div className={styles.msg}>{msg}</div>;
}
