import AddEmployee from "../components/AddEmployee/AddEmployee";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import { useDataContext } from "../context/DataContextProvider";

const HomePage = () => {
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

export default HomePage;
