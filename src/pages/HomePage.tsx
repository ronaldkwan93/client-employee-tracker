import EmployeeList from "../components/EmployeeList/EmployeeList";
import { useDataContext } from "../context/DataContextProvider";

const HomePage = () => {
    const {employees} = useDataContext();
    
    console.log(employees);

  return <><EmployeeList/></>;
};

export default HomePage;
