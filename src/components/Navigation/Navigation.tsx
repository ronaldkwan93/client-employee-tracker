import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.scss";
import { useLocation, useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDashboardNav = () => {
    navigate("/");
  };

  const handleEmployeeNav = () => {
    navigate("/employees");
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.container__nav} ${
          location.pathname === "/" ? styles.active : ""
        }`}
        onClick={handleDashboardNav}
      >
        <FontAwesomeIcon icon={faGaugeHigh} />
        <h2>Dashboard</h2>
      </div>
      <div
        className={`${styles.container__nav} ${
          location.pathname === "/employees" ? styles.active : ""
        }`}
        onClick={handleEmployeeNav}
      >
        <FontAwesomeIcon icon={faUsers} />
        <h2>Employees</h2>
      </div>
      <div className={styles.container__nav}>
        <FontAwesomeIcon icon={faFile} />
        <h2>Documents (Coming Soon!)</h2>
      </div>
    </div>
  );
};

export default Navigation;
