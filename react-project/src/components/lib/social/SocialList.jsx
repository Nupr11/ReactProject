import styles from "./socialList.module.css";
import { SocialItem } from "./components/SocialItem";

export const SocialList = ({ className, social }) => {
  const socialList = social.map((link) => (
    <SocialItem
      className={styles.socialItem}
      key={link.id + link.title}
      icon={link}
    ></SocialItem>
  ));
  return <ul className={`${className} ${styles.socialList}`}>{socialList}</ul>;
};
