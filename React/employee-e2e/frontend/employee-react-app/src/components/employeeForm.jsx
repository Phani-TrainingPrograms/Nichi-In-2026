import React, { useState, useEffect } from 'react'
import { createNewEmployee, updateEmployee } from '../services/employeeService';

export default function EmployeeForm({selectedEmployee, refreshEmployees, clearSelection}) {
    const [ formData, setFormData ] = useState({
        name : "",
        address : "",
        salary: "",
        image : ""
    })

    useEffect(()=>{
        if(selectedEmployee){
            setFormData(selectedEmployee)
        }
    }, [selectedEmployee]);

    ///////////////Event Handlers////////////////////////////////////
    const handleChange = (e) => setFormData({...formData, [e.target.name] : e.target.value})

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(selectedEmployee){
            setFormData({...formData, _id: selectedEmployee._id})
            await updateEmployee(formData)
        }else{
            await createNewEmployee(formData);
        }
        refreshEmployees();
        clearSelection();
        setFormData({name : "", address : "", salary : "", image : ""})
    }

  return (  
    <>
        <div>Employee Details</div>
        <hr />
        {JSON.stringify(formData)}
        <form onSubmit={handleSubmit}>
            <input name='name' value={formData.name} onChange= {handleChange } placeholder='Name' className='form-control'/>
            <input name='address' value={formData.address} onChange={handleChange} placeholder='address' className='form-control'/>
            <input name='salary' value={formData.salary} onChange={handleChange} placeholder='Salary' className='form-control'/>
            <input name='image' value={formData.image} onChange={handleChange} placeholder='Image' className='form-control'/>
            <button type='submit' className='btn btn-danger'>Update Employee</button>
        </form>
    </>
  )
}
