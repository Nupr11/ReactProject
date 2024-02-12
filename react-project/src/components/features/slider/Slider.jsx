import styles from "./slider.module.css";
import { useState } from "react";
import { SliderActions, SliderCard, SliderCardInfo } from "./components";
import { Spinner } from "../spinner";
import { useMemo, useEffect } from "react";
import { useCharacters } from "./../../../api";
import { randomInt } from "../../../utils/strings";

const DEFAULT = {
  data: [],
  limit: 100,
  slides: 11,
  onStart: 0,
};
const NOT_EXISTED_IMG = "image_not_available";

export function Slider({ className }) {
  const [currentCard, setCurrentCard] = useState(DEFAULT.onStart);
  const [selectedStories, setSelectedStories] = useState([]);
  const { data, error, isLoading } = useCharacters({ limit: DEFAULT.limit });
  const stories = data || DEFAULT.data;

  if (error) throw new Error("Error fetching data");

  const handleClickSlide = (index) => {
    setCurrentCard(index);
  };
  const handleClickPrev = () => {
    setCurrentCard((prev) => (prev > 0 ? currentCard - 1 : prev));
  };
  const handleClickNext = () => {
    setCurrentCard((prev) =>
      prev < selectedStories.length - 1 ? currentCard + 1 : prev
    );
  };
  const isActive = (index) => (index === currentCard ? styles.active : "");

  useEffect(() => {
    const preparedStories = stories
      .filter((story) => !story.thumbnail.path.includes(NOT_EXISTED_IMG))
      .sort(() => Math.random() - 0.5)
      .slice(0, DEFAULT.slides);

    setSelectedStories(preparedStories);
  }, [stories]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={`${className} ${styles.sliderWrapper}`}>
        <SliderActions
          className={styles.actions}
          length={selectedStories.length}
          current={currentCard}
          prev={handleClickPrev}
          next={handleClickNext}
        />
        <ul className={styles.slider}>
          {selectedStories.map((slide, index) => (
            <SliderCard
              className={`${styles.slide} ${isActive(index)}`}
              onClick={() => handleClickSlide(index)}
              key={slide.id}
              src={`${slide.thumbnail.path}.${slide.thumbnail.extension}`}
              alt={slide.title}
            >
              {isActive(index) && (
                <SliderCardInfo
                  className={styles.cardInfo}
                  to={`/characters/${slide.id}`}
                />
              )}
            </SliderCard>
          ))}
        </ul>
      </div>
    </>
  );
}
