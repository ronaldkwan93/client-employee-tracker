import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOnClick} className={styles.container__group}>
        <FontAwesomeIcon icon={faCompass} className={styles.container__logo} />
        <h1 className={styles.container__header}>PulseBoard</h1>
      </div>
    </div>
  );
};

export default NavBar;
