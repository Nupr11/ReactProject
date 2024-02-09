import styles from "./nav.module.css";
import { NavItem } from "./components/NavItem";
import { NAV_LINKS } from "../../../../data/data";

export function Nav({ className }) {
  const navList = NAV_LINKS.map((link) => (
    <NavItem key={link.title} link={link} className={styles.navItem} />
  ));
  return (
    <nav className={className}>
      <ul className={styles.navList}>{navList}</ul>
    </nav>
  );
}
