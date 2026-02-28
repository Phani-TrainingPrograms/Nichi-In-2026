import React from 'react'
import ImageContact from './ImageContact';

const Contact = ({contact, onEdit, onDelete})=>(
    <div className="card m-2" style={{width: '30%'}}>
        <ImageContact contact={contact}/>
        <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.mobile}</p>
        <a href="#" className="btn btn-primary" onClick={ () => onEdit(contact)}>Edit</a>
        <a href="#" className="btn btn-danger m-2" onClick={ () => onDelete(contact.id)}>Delete</a>
        </div>
    </div>
);

export default Contact;

