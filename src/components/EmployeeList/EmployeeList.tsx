import type { Employee } from "../../App";

type EmployeeListProps = {
  data: Employee [];
};

const EmployeeList = ({data}: EmployeeListProps) => {
  return <div>
    {data.map((employee) => (<div>
      p
    </div>))}
  </div>;
};

export default EmployeeList;
