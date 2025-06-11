import AddEmployee from "../components/AddEmployee/AddEmployee";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import { useDataContext } from "../context/DataContextProvider";

const Employees = () => {
  const { employees } = useDataContext();

  console.log(employees);

  return (
    <>
    <h2>Employee List</h2>
      <AddEmployee/>
      <EmployeeList />
    </>
  );
};

export default Employees;
