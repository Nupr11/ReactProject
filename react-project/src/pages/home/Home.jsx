import styles from "./home.module.css";
import { AnimatedPage, Text, Title, Slider } from "../../components";

export function Home() {
  return (
    <AnimatedPage>
      <section className={styles.promo}>
        <Title className={styles.title}>
          top seven of the most wanted characters
        </Title>
        <Text className={styles.text}>
          welcome to our curated collection of captivating characters! Here,
          you'll find the most intriguing heroes from across realms and
          dimensions, each with a unique story waiting to be discovered. Dive
          into the depths of imagination as you encounter fearless adventurers,
          cunning rogues, and enigmatic beings beyond your wildest dreams.
        </Text>
        <Text className={styles.text}>
          these are not just any heroes – they're the ones that will ignite your
          imagination and leave you yearning for more. Click through our
          selection and let fate guide you to your next unforgettable encounter.
          Whether you're drawn to tales of bravery, mystery, or sheer whimsy,
          there's something here for every seeker of adventure.
        </Text>
        <Text className={styles.text}>
          join us as we celebrate the extraordinary and embark on a journey
          through the most enthralling tales ever told. Your next favorite
          character awaits – are you ready to meet them?
        </Text>
        <Slider className={styles.sliderWrapper} />
      </section>
    </AnimatedPage>
  );
}
