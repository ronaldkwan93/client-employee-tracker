import { createContext, useContext, useEffect, useState } from "react";
import { getAllEmployees } from "../services/dataServices";

export const DataContext = createContext<DataContext | null>(null);

type Contract = "CONTRACT" | "PERMANENT";

export type Employee = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  address: string;
  contractType: Contract;
};

type DataContextProviderAProps = {
  children: React.ReactNode;
};

type DataContext = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

export default function DataContextProvider({
  children,
}: DataContextProviderAProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    getAllEmployees().then((result) => setEmployees(result));
  }, [refresh]);

  return (
    <DataContext.Provider value={{ employees, setEmployees, setRefresh }}>
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
