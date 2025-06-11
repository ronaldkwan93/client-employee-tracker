import { useNavigate } from "react-router";
import {
  useDataContext,
  type Employee,
} from "../../context/DataContextProvider";
import { deleteEmployeeById } from "../../services/dataServices";
import styles from "./EmployeeCard.module.scss";

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
    <div className={styles.container}>
      <p>
        {data.firstName} {data?.middlename} {data.lastName}
      </p>
      <img src='usericon.JPG' alt="user" />
      <p>{data.contractType}</p>
      <p>{data.email}</p>
      <div>
        <button onClick={() => handleEdit()}>Edit</button>
        <button onClick={() => handleRemove()}>Remove</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
