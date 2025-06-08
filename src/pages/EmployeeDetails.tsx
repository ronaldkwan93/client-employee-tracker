import { useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../services/dataServices";

const EmployeeDetails = () => {
  const { id } = useParams();
    const [formData, setFormData] = useState([]);

  useEffect(() => {
    // getEmployeeById(id).then((result) => setFormData(result));
  }, [id])

  console.log(id);

  return (
    <div>
      <h2>Employee Details</h2>
      <EmployeeForm />
    </div>
  );
};

export default EmployeeDetails;
