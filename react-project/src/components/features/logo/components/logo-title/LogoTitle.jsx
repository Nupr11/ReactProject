import styles from "./logoTitle.module.css";

export function LogoTitle({ className, title }) {
  return (
    <h1 className={`${className} ${styles.logoTitle}`}>
      <strong>{title}</strong>
    </h1>
  );
}
