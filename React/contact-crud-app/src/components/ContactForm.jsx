import React, { useState } from 'react'

export default function ContactForm({ onSave, editingContact }) {
    //create the states.
    const [formData, setFormData] = useState({ name: "", mobile: "", pic: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => alert("Test");
 
    return (
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder='Enter the name' value={formData.name} onChange={handleChange} required className='form-control m-3' />
                <input name="mobile" placeholder='Enter the mobile' value={formData.mobile} onChange={handleChange} required className='form-control m-3' />
                <input name="pic" placeholder='Enter the fileName' value={formData.pic} onChange={handleChange} required className='form-control m-3' />
                <button type='submit' className='btn btn-danger'>{editingContact ? "Update" : "Add New"}</button>
            </form>
        )
}
