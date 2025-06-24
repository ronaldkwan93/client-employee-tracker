import type { Employee } from "../context/DataContextProvider";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllEmployees = async () => {
  const response = await fetch(`${API_BASE_URL}/employees`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();

  return result;
};

export const createEmployee = async (data: Employee, photo?: File) => {
  const formData = new FormData();
  formData.append(
    "employee",
    JSON.stringify({
      firstName: data.firstName,
      middlename: data.middlename,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      address: data.address,
      contractType: data.contractType,
      startDate: data.startDate.toISOString().split("T")[0], //
      endDate: data.endDate ? data.endDate.toISOString().split("T")[0] : null,
      employmentType: data.employmentType,
      hoursPerWeek: data.hoursPerWeek,
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await fetch(`${API_BASE_URL}/employees`, {
    method: "POST",
    body: formData,
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
    const result = await response.json();
    return result;
  } catch (error) {}
};

export const updateEmployeeById = async (
  id: number,
  data: Employee,
  photo?: File
) => {
  const formData = new FormData();
  formData.append(
    "employee",
    JSON.stringify({
      firstName: data.firstName,
      middlename: data.middlename,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      address: data.address,
      contractType: data.contractType,
      startDate: data.startDate.toISOString().split("T")[0],
      endDate: data.endDate ? data.endDate.toISOString().split("T")[0] : null,
      employmentType: data.employmentType,
      hoursPerWeek: data.hoursPerWeek,
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: "PATCH",
    body: formData,
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

export const getFilteredEmployees = async (
  filterField: string,
  filterValue: string
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/employees/list/${filterField}/${filterValue}`
    );
    if (!response.ok) {
      throw new Error("Failed to get filtered employee data");
    }
    const result = await response.json();
    return result;
  } catch (error) {}
};
