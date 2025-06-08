import type { Employee } from "../../context/DataContextProvider"

type EmployeeProps = {
    data: Employee;
}

const EmployeeCard = ({data} : EmployeeProps) => {

  return (
    <div>
      <p>{data.firstName} {data?.middleName} {data.lastName}</p>
      <p>{data.contractType}</p>
      <p>{data.email}</p>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  )
}

export default EmployeeCard
