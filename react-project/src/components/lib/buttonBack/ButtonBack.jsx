import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import styles from "./buttonBack.module.css";

export const ButtonBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handlerClick = () => {
    location.key !== "default" && navigate(-1);
  };
  const hide = location.pathname === "/home" ? styles.hide : "";
  return (
    <Button className={`${styles.btnBack} ${hide}`} handler={handlerClick}>
      Back
    </Button>
  );
};
