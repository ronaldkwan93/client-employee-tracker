export const getAllData = async () => { 
    const response = await fetch('http://localhost:8080/employees');
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const result = response.json();

    return result;
 }