import { useEffect, useState } from "react";
import "./App.css";
import { getAllData } from "./services/dataServices";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EmployeeDetails from "./pages/EmployeeDetails";

export type Employee = {
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

  console.log(employees);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employeeDetails" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
