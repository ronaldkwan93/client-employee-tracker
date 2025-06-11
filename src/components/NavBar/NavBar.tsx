import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faCompass} className={styles.container__logo} />
      <h1 className={styles.container__header}>PulseBoard</h1>
    </div>
  );
};

export default NavBar;
