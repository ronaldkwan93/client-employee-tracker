import { useNavigate } from "react-router";
import {
  useDataContext,
  type Employee,
} from "../../context/DataContextProvider";
import { deleteEmployeeById } from "../../services/dataServices";

type EmployeeProps = {
  data: Employee;
};

const EmployeeCard = ({ data }: EmployeeProps) => {
  const navigate = useNavigate();

  const { setEmployees } = useDataContext();

  const handleRemove = async () => {
    deleteEmployeeById(data.id);
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== data.id)
    );
  };

  const handleEdit = () => {
    navigate(`/employeeDetails/${data.id}`);
  };

  return (
    <div>
      <p>
        {data.firstName} {data?.middlename} {data.lastName}
      </p>
      <p>{data.contractType}</p>
      <p>{data.email}</p>
      <button onClick={() => handleEdit()}>Edit</button>
      <button onClick={() => handleRemove()}>Remove</button>
    </div>
  );
};

export default EmployeeCard;
