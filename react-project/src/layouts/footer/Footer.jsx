import styles from "./footer.module.css";
import { Info, SocialList, Terms } from "./components";
import { SOCIAL_LINKS, SITE_INFO } from "../../data/data";

export const Footer = ({ className }) => {
  return (
    <footer className={`${className} ${styles.footer}`}>
      <SocialList className={styles.socialList} social={SOCIAL_LINKS} />
      <Info className={styles.info} info={SITE_INFO} />
      <Terms className={styles.terms} />
    </footer>
  );
};
