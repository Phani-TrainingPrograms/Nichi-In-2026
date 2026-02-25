import React from 'react'

export default function Calc() {
  return (
    <div>
        <h1>Calc Program</h1>
        <hr />
        <input className='form-control m-2' placeholder='Enter First value' type='number'/>
        <select className='form-select m-2'>
            <option value='add'>Add</option>
            <option value='subract'>subract</option>
            <option value='multiply'>Multiply</option>
            <option value='divide'>Divide</option>
        </select>
        <input className='form-control m-2' placeholder='Enter the Second value' type='number'/>
        <button className='btn btn-primary m-2'>Result</button>
        <p>Result : </p>
    </div>
  )
}
