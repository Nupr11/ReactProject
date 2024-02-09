import styles from "./navItem.module.css";

import { CustomLink } from "../../../../../components/lib/link/customLink/CustomLink";

export function NavItem({ className, link }) {
  return (
    <li className={`${className} ${styles.navItem}`}>
      <CustomLink className={styles.navLink} to={link.path}>
        <span>{link.title}</span>
      </CustomLink>
    </li>
  );
}
