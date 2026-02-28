import axios from "axios";

const API_URL = "http://localhost:1234/api/employees";

export const getAllEmployees = async () => {
    const res = await axios.get(API_URL);
    return res.data;//data shall contain the array of employees.
}

export const getEmployeeById = async (id) =>{
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
}

export const createNewEmployee = async(emp)=>{
    const res = await axios.post(API_URL, emp);
    return res.data;
}

export const updateEmployee = async(emp)=>{
    const res = await axios.put(`${API_URL}/${emp.id}`, emp);
    return res.data;
}

export const deleteEmployee = async (id) =>{
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
}
