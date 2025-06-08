import { useNavigate } from "react-router"

const AddEmployee = () => {
    const navigate = useNavigate();
    const handleAddEmployee = () => {
        navigate('/employeeDetails')
    }
  return (
    <div>
        <button onClick={() => handleAddEmployee()}>Add Employee</button>
    </div>
  )
}

export default AddEmployee
