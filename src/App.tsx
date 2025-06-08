import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EmployeeDetails from "./pages/EmployeeDetails";
import DataContextProvider from "./context/DataContextProvider";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employeeDetails" element={<EmployeeDetails />} />
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
