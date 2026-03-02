import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ImgContact from './imgcontact.jsx'
export default function ViewContact() {
  const { id } = useParams();
  const [state, setState] = useState({
    contact : {}
  })
  
  useEffect(() => {
    let contacts = [
      {id : 123, name : "Phaniraj", mobile: 12434334, image : "pic1.png"},
      {id : 124, name : "Suresh", mobile: 12434334, image : "pic1.png"},
      {id : 125, name : "Gopi", mobile: 12434334, image : "pic1.png"},
      {id : 126, name : "Rajesh", mobile: 12434334, image : "pic1.png"}
    ]
    debugger;
    let contact = contacts.find(c => c.id == id);
    setState({...state, contact});
  }, [id])

  let {contact} = state; 
  return (
    <div>
      <div className="container">
        <div className="row">
          <ImgContact image={contact.image}/>
          <input className='form-control' value={contact.id} disabled/>  
          <input className='form-control' value={contact.name} disabled/>
        </div>
        <div className="row">
          <Link to={'/'} className='btn btn-primary m-2'>
            <i class="fa fa-backward" aria-hidden="true"></i>
            Back to Contacts
          </Link>
        </div>
      </div>
    </div>
  )
}
