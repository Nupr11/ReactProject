import IMG_404 from "./../../assets/img/404.png";
import styles from "./pageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>oops!</h2>
        <span className={styles.text}>page not found</span>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} alt="page not found" src={IMG_404}></img>
      </div>
    </section>
  );
};
