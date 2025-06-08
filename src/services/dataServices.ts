export const getAllEmployees = async () => {
  const response = await fetch("http://localhost:8080/employees");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = response.json();

  return result;
};

export const deleteEmployeeById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
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
    const response = await fetch(`http://localhost:8080/employees/${id}`);
    if (!response.ok) {
      throw new Error("Failed to get Employee data");
    }
    const result = response.json();
    return result;
  } catch (error) {}
};
