import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../services/dataServices";
import type { Employee } from "../context/DataContextProvider";
import styles from './EmployeeDetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState<Employee>();

  useEffect(() => {
    if (id !== undefined) {
      getEmployeeById(Number(id)).then((result) => setFormData(result));
    }
  }, [id]);

  console.log(id);

  const handleBack = () => {
    id ? navigate("/employees") : navigate("/");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleBack()}><FontAwesomeIcon icon={faArrowLeft} /> back</button>
      <h2>Employee Details</h2>
      {<EmployeeForm data={formData} />}
    </div>
  );
};

export default EmployeeDetails;
