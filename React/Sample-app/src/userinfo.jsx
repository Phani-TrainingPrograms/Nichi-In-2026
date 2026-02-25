import React from 'react'
import myPic from './assets/Phani.png'
//React gives one element called Fragment which is a plain tag that can be used to contain other elements in it. As React renders single JSX Element, U can use this as the root element for UR component. 
export default function UserInfo() {
  const name = "Phaniraj"
  const email ="phanirajbn@gmail.com"
    
  return (
    <>
        <h1>User Information</h1>
        <hr />
        <div className="container">
            <div className="row">
                <div className='col-md-2'/>
                <div className="col-md-8">
                    <img className='card-image img-thumbnail rounded-5 card-sm' src={myPic} alt='myPic'/>
                    <h1>{name}</h1>
                    <hr/>
                    <p>Email : {email}</p>
                </div>
            </div>
        </div>
    </>
  )
}
