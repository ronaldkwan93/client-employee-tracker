import type { Employee } from "../../context/DataContextProvider";

interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
    console.log(data, 'data in table')
  return (
    <div>
      {data.map((emp) => (
        <div key={emp.id}>
          {emp.firstName}
          {emp.middlename}
          {emp.lastName}
          {emp.email}
        </div>
      ))}
    </div>
  );
};

export default EmployeeTable;
