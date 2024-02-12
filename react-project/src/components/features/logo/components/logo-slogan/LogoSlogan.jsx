import styles from "./logoSlogan.module.css";

export function LogoSlogan({ className, slogan }) {
  return (
    <span className={`${className} ${styles.logoSlogan}`}>
      <strong>{slogan}</strong>
    </span>
  );
}
