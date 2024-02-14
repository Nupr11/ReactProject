import styles from "./input.module.css";

export function Input({ className, type, label, handler }) {
  return (
    <label className={`${className} ${styles.label}`}>
      <input onChange={handler} type={type} title={label} name={label} />
      <span>{label}</span>
    </label>
  );
}
