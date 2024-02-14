import styles from "./buttonArrow.module.css";

export function ButtonArrow({ className, direction, onClick, disable }) {
  let directionClass = "arrow";
  let disableClass = disable ? "disable" : "";

  if (direction === "left") {
    directionClass += "-left";
  }
  if (direction === "right") {
    directionClass += "-right";
  }

  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${className} ${styles[directionClass]} ${styles[disableClass]}`}
    />
  );
}
