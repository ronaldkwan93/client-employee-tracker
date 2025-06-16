import { useState } from "react";
import { useDataContext } from "../../context/DataContextProvider";
import EmployeeCard from "../Employee/EmployeeCard";
import style from "./EmployeeList.module.scss";

const EmployeeList = () => {
  const [search, setSearch] = useState("");
  const { employees } = useDataContext();

  if (employees.length === 0) {
    return <div>There are no employees yet!</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an employee"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={style.container}>
        {employees
          .filter((employee) => {
            return search.toLowerCase() === ""
              ? employee
              : employee.firstName.toLowerCase().includes(search.toLowerCase());
          })
          .map((employee) => (
            <EmployeeCard key={employee.id} data={employee} />
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
