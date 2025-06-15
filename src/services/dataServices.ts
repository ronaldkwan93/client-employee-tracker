import type { Employee } from "../context/DataContextProvider";

const API_BASE_URL = "http://localhost:8080";

export const getAllEmployees = async () => {
  const response = await fetch(`${API_BASE_URL}/employees`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = response.json();

  return result;
};

export const createEmployee = async (data: Employee) => {
  const response = await fetch(`${API_BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    const message = result?.message || "Unknown error occurred";
    throw new Error(message);
  }

  return result;
};

export const deleteEmployeeById = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete, please try again");
    }
  } catch (error) {}
};

export const getEmployeeById = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`);
    if (!response.ok) {
      throw new Error("Failed to get Employee data");
    }
    const result = response.json();
    return result;
  } catch (error) {}
};

export const updateEmployeeById = async (id: number, data: Employee) => {
  const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    const message = result?.message || "Unknown error occurred";
    throw new Error(message);
  }

  return result;
};

export const getEmployeeStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees/statistics`);
    if (!response.ok) {
      throw new Error("Failed to get Employee statistics");
    }
    const result = await response.json();
    return result;
  } catch (error) {}
};

export const getFilteredEmployees = async (filterField : string, filterValue: string) => {
   try {
    const response = await fetch(`${API_BASE_URL}/employees/list/${filterField}/${filterValue}`);
    if (!response.ok) {
      throw new Error("Failed to get filtered employee data");
    }
    const result = await response.json();
    return result;
  } catch (error) {}
}
