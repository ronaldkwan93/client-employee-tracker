import AddEmployee from "../components/AddEmployee/AddEmployee";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import styles from "./Employees.module.scss";

const Employees = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__heading}>
          <h2>Employee List</h2>
          <AddEmployee />
        </div>

        <EmployeeList />
      </div>
    </>
  );
};

export default Employees;
