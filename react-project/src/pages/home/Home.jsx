import styles from "./home.module.css";
import { Promo } from "./components";

import avatar_01 from "./../../assets/img/avatar_01.jpeg";
import avatar_02 from "./../../assets/img/avatar_02.jpeg";
import avatar_03 from "./../../assets/img/avatar_03.jpeg";
import avatar_04 from "./../../assets/img/avatar_04.jpeg";
import avatar_05 from "./../../assets/img/avatar_05.jpeg";
import avatar_06 from "./../../assets/img/avatar_06.jpeg";
import avatar_07 from "./../../assets/img/avatar_07.jpeg";
import { AnimatedPage } from "../../components/animated/animatedPage/AnimatedPage";
import { useData } from "../../hooks/useData";
import { getAllSeries } from "../../api/requests";

// const promoData = new Set();
// promoData.size = 7;
// const randomInt = (max) => Math.trunc(Math.random() * max);
export function Home() {
  // const { data: series, loading: loadingSeries } = useData(getAllSeries(), []);
  // promoData.map((item) => (item = series(randomInt(series.length))));
  // console.log(promoData);
  // const randomInt = series.length;
  return (
    <AnimatedPage>
      {
        <Promo className={styles.promo}>
          <img src={avatar_01} alt="slide_01" />
          <img src={avatar_02} alt="slide_02" />
          <img src={avatar_03} alt="slide_03" />
          <img src={avatar_04} alt="slide_04" />
          <img src={avatar_05} alt="slide_05" />
          <img src={avatar_06} alt="slide_06" />
          <img src={avatar_07} alt="slide_07" />
        </Promo>
      }
    </AnimatedPage>
  );
}
