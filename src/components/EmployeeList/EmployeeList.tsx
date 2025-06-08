import { useDataContext } from "../../context/DataContextProvider";


const EmployeeList = () => {
  const {employees} = useDataContext();

  return <div>

    {employees.map((employee) => (<div>
      
    </div>))}
  </div>;
};

export default EmployeeList;
