import { useEffect, useState } from "react";
import "./App.css";
import { getAllData } from "./services/dataServices";

type Employee = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string; 
};

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAllData().then((result) => setEmployees(result));
  }, []);

  console.log(employees)

  return <>
  {employees.map((employee) => (<div key={employee.id}><p>First name: {employee.firstName}</p></div>))}
  </>;
}

export default App;
