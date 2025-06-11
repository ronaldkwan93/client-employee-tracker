import AddEmployee from "../components/AddEmployee/AddEmployee";
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <AddEmployee />
      
    </div>
  );
};

export default Dashboard;
