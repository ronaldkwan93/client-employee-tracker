import { useNavigate } from "react-router";
import {
  useDataContext,
  type Employee,
} from "../../context/DataContextProvider";
import { deleteEmployeeById } from "../../services/dataServices";
import styles from "./EmployeeCard.module.scss";
import { useState } from "react";

type EmployeeProps = {
  data: Employee;
};

const EmployeeCard = ({ data }: EmployeeProps) => {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { setEmployees } = useDataContext();

  const handleConfirmDelete = () => {
    setConfirmDelete(true);
  };

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
    <>
      {confirmDelete && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Are you sure you want to delete {data.firstName} {data.lastName}?</p>
            <div className={styles.modalButtons}>
              <button onClick={handleRemove}>Yes, delete</button>
              <button onClick={() => setConfirmDelete(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <p>
          {data.firstName} {data?.middlename} {data.lastName}
        </p>
        <img
          src={
            data.profileImageUrl ??
            "https://employeetrackerpb.s3.ap-southeast-2.amazonaws.com/public/usericon.JPG"
          }
          alt="user"
        />
        <p>{data.contractType}</p>
        <p>{data.email}</p>
        <div>
          <button onClick={() => handleEdit()}>Edit</button>
          <button onClick={() => handleConfirmDelete()}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
