import { BrowserRouter, Route, Routes } from "react-router";
import EmployeeDetails from "./pages/EmployeeDetails";
import DataContextProvider from "./context/DataContextProvider";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <NavBar />
          <div className={styles.container}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employeeDetails" element={<EmployeeDetails />} />
              <Route
                path="/employeeDetails/:id"
                element={<EmployeeDetails />}
              />
            </Routes>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
