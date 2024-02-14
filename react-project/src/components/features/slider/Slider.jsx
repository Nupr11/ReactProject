import styles from "./slider.module.css";
import { useState, useEffect } from "react";
import { SliderActions, SliderCard, SliderCardInfo } from "./components";
import { useCharacters } from "./../../../api";
import { Spinner } from "../spinner";
import { Error } from "../error";

const DEFAULT = {
  data: [],
  START_SLIDE: 0,
  LIMIT_SLIDES: 100,
  USED_SLIDES: 9,
  ERROR_FETCH: "Error fetching data",
  NOT_EXISTED_IMG: "image_not_available",
};

export function Slider({ className }) {
  const { data, error, isLoading } = useCharacters({
    limit: DEFAULT.LIMIT_SLIDES,
  });
  const stories = data || DEFAULT.data;

  const [current, setCurrent] = useState(DEFAULT.START_SLIDE);
  const [selectedStories, setSelectedStories] = useState(DEFAULT.data);

  const handleClickSlide = (index) => setCurrent(index);
  const handleClickPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleClickNext = () =>
    setCurrent((prev) => Math.min(prev + 1, DEFAULT.USED_SLIDES - 1));

  const isActive = (index) => (index === current ? styles.active : "");

  useEffect(() => {
    const preparedStories = stories
      .filter(
        (story) => !story.thumbnail.path.includes(DEFAULT.NOT_EXISTED_IMG)
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, DEFAULT.USED_SLIDES);
    setSelectedStories(preparedStories);
  }, [stories]);

  return (
    <>
      {error && <Error msg={DEFAULT.ERROR_FETCH} />}
      {isLoading && <Spinner />}
      <div className={`${className} ${styles.sliderWrapper}`}>
        <SliderActions
          className={styles.actions}
          length={selectedStories.length}
          current={current}
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
