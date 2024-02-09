import styles from "./slider.module.css";
import { useState } from "react";
import { SliderActions, SliderCard, SliderCardInfo } from "./components";
import { AnimatedFragment } from "../../animated";

export function Slider({ className, children }) {
  const [current, setCurrent] = useState(0);

  const handleClickSlide = (index) => {
    setCurrent(index);
  };

  const handleClickPrev = () => {
    setCurrent((prev) => (prev > 0 ? current - 1 : prev));
  };

  const handleClickNext = () => {
    setCurrent((prev) => (prev < children.length - 1 ? current + 1 : prev));
  };

  const isActive = (index) => (index === current ? styles.active : "");

  return (
    <div className={`${className} ${styles.sliderWrapper}`}>
      <SliderActions
        className={styles.actions}
        length={children.length}
        current={current}
        prev={handleClickPrev}
        next={handleClickNext}
      />

      <ul className={styles.slider}>
        {children.map((slide, index) => (
          <SliderCard
            className={`${styles.slide} ${isActive(index)}`}
            index={index}
            onClick={() => handleClickSlide(index)}
            key={index}
          >
            {slide}
            {isActive(index) && (
              <SliderCardInfo className={styles.cardInfo} to={slide.info} />
            )}
          </SliderCard>
        ))}
      </ul>
    </div>
  );
}
