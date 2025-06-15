import { useNavigate } from "react-router";
import type { Employee } from "../../context/DataContextProvider";
import styles from "./EmployeeTable.module.scss";

interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable = ({ data }: EmployeeTableProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        {data.map((emp) => (
          <div key={emp.id} className={styles.container__details}>
            <p className={styles.container__details__id}>{emp.id}</p>
            <p>{emp.firstName}</p>
            <p>{emp.lastName}</p>
            <p>{emp.email}</p>
            <img
              src="usericon.JPG"
              alt="user"
              onClick={() => {
                navigate(`/employeeDetails/${emp.id}`);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeTable;
