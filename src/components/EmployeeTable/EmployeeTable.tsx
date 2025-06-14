import type { Employee } from "../../context/DataContextProvider";
import styles from "./EmployeeTable.module.scss";

interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable = ({ data }: EmployeeTableProps) => {
  console.log(data, "data in table");

  return (
    <>
      <div className={styles.container}>
        {data.map((emp) => (
          <div key={emp.id} className={styles.container__details}>
            <p>{emp.firstName}</p>
            <p>{emp.lastName}</p>
            <p>{emp.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeTable;
