import { createContext, useContext, useEffect, useState } from "react";
import { getAllData } from "../services/dataServices";

export const DataContext = createContext<DataContext | null>(null);

export type Employee = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
};

type DataContextProviderAProps = {
  children: React.ReactNode;
};

type DataContext = {
  employees: string[];
};

export default function DataContextProvider({
  children,
}: DataContextProviderAProps) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllData().then((result) => setEmployees(result));
  }, []);

  return (
    <DataContext.Provider value={{ employees }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("failed to use DataContext");
  }
  return context;
}
