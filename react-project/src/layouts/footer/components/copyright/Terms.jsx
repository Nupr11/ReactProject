import { useEffect, useState } from "react";
import styles from "./terms.module.css";
import { getYear } from "../../../../utils/date";

export function Terms({ className }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const currentDate = getYear();
    setDate(currentDate);
  }, []);

  return (
    <div className={`${className} ${styles.terms}`}>
      <span>
        This work is protected by copyright. All Rights Reserved. &copy;
      </span>
      <span className={styles.year}>{date}</span>
      <p>
        You may use this material for personal, non-commercial purposes only.
      </p>
    </div>
  );
}
