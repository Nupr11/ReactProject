import styles from "./button.module.css";

export function Button({ className, text, handler }) {
  return (
    <button className={`${className} ${styles.btn}`} onClick={handler}>
      {text}
    </button>
  );
}
