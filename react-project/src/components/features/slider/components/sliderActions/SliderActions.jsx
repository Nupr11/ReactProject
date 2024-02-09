import { ButtonArrow } from "../../../../lib/buttonArrow/ButtonArrow";
import styles from "./sliderActions.module.css";

export const SliderActions = ({ className, prev, current, next, length }) => {
  return (
    <div className={`${styles.actions} ${className}`}>
      <ButtonArrow
        className={styles.arrow}
        direction="left"
        onClick={prev}
        disable={current === 0}
      />
      <ButtonArrow
        className={styles.arrow}
        direction="right"
        onClick={next}
        disable={current === length - 1}
      />
    </div>
  );
};
