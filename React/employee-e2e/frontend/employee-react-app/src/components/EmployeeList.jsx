import React, { useEffect, useState} from 'react'
import { getAllEmployees } from '../services/employeeService';
import EmployeeForm from './employeeForm';

export default function EmployeeList() {
  const [ empList, setEmpList ] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const refreshEmployees = () => getAllEmployees().then(setEmpList);

  useEffect(()=>{
    getAllEmployees().then(data => setEmpList(data))
  })
  return (
    <>
        <EmployeeForm selectedEmployee={selectedEmployee} refreshEmployees={refreshEmployees} clearSelection={() =>setSelectedEmployee(null)}/>
        <ul>
        {
            empList.map(e =>(
                <li key={e._id}>
                    <img src={e.image} alt={e.name} width={50}/>
                    {e.name} - {e.address}
                </li>
            ))
        }
        </ul>
    </>
  )
}
