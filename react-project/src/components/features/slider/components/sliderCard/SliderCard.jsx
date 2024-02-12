import styles from "./sliderCard.module.css";

export function SliderCard({ className, onClick, src, alt, children }) {
  return (
    <li onClick={onClick} className={`${styles.slide} ${className}`}>
      <img src={src} alt={alt} />
      {children}
    </li>
  );
}
