import AddEmployee from "../components/AddEmployee/AddEmployee";
import StatsSection from "../components/StatsSection/StatsSection";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.container__add}>
        <AddEmployee />
      </div>
        
        <StatsSection/>
    </div>
  );
};

export default Dashboard;
