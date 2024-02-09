import { Title, Slider, Text } from "../../../components/features";
import styles from "./promo.module.css";

export function Promo({ className, children }) {
  return (
    <section className={`${className} ${styles.promo}`}>
      <Title className={styles.title}>Section Promo</Title>
      <Text className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        quasi non at animi architecto, voluptates soluta ut repellendus ratione
        obcaecati sapiente voluptate iste veniam doloribus. Mollitia, et sunt
        quos dolores eius, ipsa excepturi similique perferendis vero ratione
        amet quia, architecto aut voluptatem non placeat debitis totam ullam
        dignissimos temporibus facilis vel! Ad enim blanditiis eos, tenetur quae
        culpa, recusandae cumque laborum est architecto neque fugiat libero
        quaerat? Incidunt soluta hic nemo placeat beatae, recusandae, assumenda
        perferendis numquam ex dignissimos temporibus molestias ipsa quo. Nihil,
        placeat magnam? Eum labore maiores a placeat voluptatem, inventore ab
        modi quibusdam libero. Sed, aperiam quo?
      </Text>
      <Slider className={styles.sliderWrapper}>{children}</Slider>
    </section>
  );
}
