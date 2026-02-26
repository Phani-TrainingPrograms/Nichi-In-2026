import React from 'react'
import { useState } from 'react'
//Any inputs that needs to be consumed by UR component shall be stored as State. We use a capability of React called useState to store the input values and use it when ever we require it. This capability in React is called HOOK.
export default function Calc() {
  const [ firstValue, setFirstValue ] = useState("")
  const [ secondValue, setSecondValue ] = useState("")
  const [ operand, setOperand ] = useState("")
  const [ result, setResult ] = useState(0)
  const calculate = ()=>{
    const f = parseFloat(firstValue)
    const s = parseFloat(secondValue)

    if(isNaN(f) || (isNaN(s))){
      setResult("Invalid Inputs")
    }
    //if U R assigning value to UR state object, it shall be done using set Functions
    switch(operand){
      case "add" : setResult(f + s); break;
      case "subtract" : setResult(f - s); break;
      case "multiply" : setResult(f * s); break;
      case "divide" : setResult(f / s); break;
      default : setResult("Invalid selection");
    }
  }
  return (
    <div>
        <h1>Calc Program</h1>
        <hr />
        <input value={firstValue} onChange={(e) => setFirstValue(e.target.value)} className='form-control m-2' placeholder='Enter First value'/>
        <select className='form-select m-2' value={operand} onChange={(e) => setOperand(e.target.value)}>
            <option value='add'>Add</option>
            <option value='subtract'>Subtract</option>
            <option value='multiply'>Multiply</option>
            <option value='divide'>Divide</option>
        </select>
        <input className='form-control m-2' value={secondValue} placeholder='Enter the Second value' onChange={(e) => setSecondValue(e.target.value)}/>
        <button onClick={calculate} className='btn btn-primary m-2'>Result</button>
        <p>Result : {result}</p>
    </div>
  )
}
