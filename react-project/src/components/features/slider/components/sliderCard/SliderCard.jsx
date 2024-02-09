import styles from "./sliderCard.module.css";

export function SliderCard({ className, onClick, index, children }) {
  return (
    <li
      key={index}
      onClick={onClick}
      className={`${styles.slide} ${className}`}
    >
      {children}
    </li>
  );
}
