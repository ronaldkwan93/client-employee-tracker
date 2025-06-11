import AddEmployee from "../components/AddEmployee/AddEmployee";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import { useDataContext } from "../context/DataContextProvider";
import styles from "./Employees.module.scss";

const Employees = () => {
  const { employees } = useDataContext();

  console.log(employees);

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
