import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageContact from './imgcontact.jsx'
export default function ContactlList() {
  const [state, setState] = useState({
    contacts : [
      {id : 123, name : "Phaniraj", mobile: 12434334, image : "pic1.png"},
      {id : 123, name : "Phaniraj", mobile: 12434334, image : "pic1.png"},
      {id : 123, name : "Phaniraj", mobile: 12434334, image : "pic1.png"},
      {id : 123, name : "Phaniraj", mobile: 12434334, image : "pic1.png"}
    ]
  })

  let { contacts } = state;
  return (
    <>
      <section className='p-3'>
        <div className="container">
          <div className="grid">
            <div className="row">
              <p className='h3'>Contact Manager</p>
              <Link to={'/add'} className='btn btn-primary ms-3'>
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                New Contact
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type='text' className='form-control m-3' placeholder='Search Names' />
            </div>
            <div className="col">
              <button className='btn btn-outline-dark m-3'>Search</button>
            </div>
          </div>
          <div className="row">
            <section>
              <div className="container">
                <div className="row">
                  {
                     contacts.length > 0 && 
                     contacts.map(c =>{
                      return (
                        <div key={c.id} className='col-md-5'>
                          <div className="card">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-4">
                                  <ImageContact image={c.image}/> 
                                </div>  
                                <div className="col-md-5">
                                  <input className='form-control' value={c.id}/>  
                                  <input className='form-control' value={c.name}/>  
                                  <input className='form-control' value={c.mobile}/>  
                                </div>  
                                <div className="col-md-1">
                                    <ul style={{listStyleType : 'none'}}>
                                      <li>
                                        <Link to={`/edit/${c.id}`} className='btn btn-success m-2'>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`/view/${c.id}`} className='btn btn-secondary m-2'>
                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`/delete/${c.id}`} className='btn btn-danger m-2'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                </div>  
                              </div>  
                            </div>  
                          </div>  
                        </div>
                      )
                     }) 
                  }
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
