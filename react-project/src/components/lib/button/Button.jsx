import styles from "./button.module.css";

export function Button({ className, type, handler, children }) {
  return (
    <button
      className={`${className} ${styles.btn}`}
      type={type}
      onClick={handler}
    >
      {children}
    </button>
  );
}
