import { useDataContext } from "../../context/DataContextProvider";
import EmployeeCard from "../Employee/EmployeeCard";

const EmployeeList = () => {
  const { employees } = useDataContext();

if(employees.length === 0) {
  return <div>There are no employees yet!</div>
}

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} data={employee} />
      ))}
    </div>
  );
};


export default EmployeeList;
