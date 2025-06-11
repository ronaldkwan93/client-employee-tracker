import { useDataContext } from "../../context/DataContextProvider";
import EmployeeCard from "../Employee/EmployeeCard";
import style from './EmployeeList.module.scss'

const EmployeeList = () => {
  const { employees } = useDataContext();

if(employees.length === 0) {
  return <div>There are no employees yet!</div>
}

  return (
    <div className={style.container}>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} data={employee} />
      ))}
    </div>
  );
};


export default EmployeeList;
