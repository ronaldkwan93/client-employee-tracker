// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import DataContextProvider from "./context/DataContextProvider";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employeeDetails" element={<EmployeeDetails />} />
            <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
