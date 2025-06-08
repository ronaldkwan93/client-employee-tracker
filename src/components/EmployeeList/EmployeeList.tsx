import { useDataContext } from "../../context/DataContextProvider";
import EmployeeCard from "../Employee/EmployeeCard";

const EmployeeList = () => {
  const { employees } = useDataContext();

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} data={employee} />
      ))}
    </div>
  );
};


export default EmployeeList;
