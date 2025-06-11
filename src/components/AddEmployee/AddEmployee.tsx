import { useNavigate } from "react-router"
import styles from './AddEmployee.module.scss'

const AddEmployee = () => {
    const navigate = useNavigate();
    const handleAddEmployee = () => {
        navigate('/employeeDetails')
    }
  return (
    <div className={styles.container}>
        <button onClick={() => handleAddEmployee()}>Add Employee</button>
    </div>
  )
}

export default AddEmployee
