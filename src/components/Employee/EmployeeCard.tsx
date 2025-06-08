import type { Employee } from "../../context/DataContextProvider";
import { deleteEmployeeById } from "../../services/dataServices";

type EmployeeProps = {
  data: Employee;
};

const EmployeeCard = ({ data }: EmployeeProps) => {
  const handleRemove = () => {
    deleteEmployeeById(data.id);
  };

  return (
    <div>
      <p>
        {data.firstName} {data?.middleName} {data.lastName}
      </p>
      <p>{data.contractType}</p>
      <p>{data.email}</p>
      <button>Edit</button>
      <button onClick={() => handleRemove()}>Remove</button>
    </div>
  );
};

export default EmployeeCard;
