//Props or properties are the simpliest way to share data among the components. If any data has to be sent from the Parent component, it shall be shared as props. 
//use rfcp to create Components with Props. Props are more like objects, where we have key-value pairs.

import React from 'react'

function PropsInfo(props) {
    const name = props ? props.name : "Guest"
    const age = props ? props.age : 0
    const isEmployee = props ? props.isEmployee : false;
  return (
    <div>
        <p>Props: {JSON.stringify(props)}</p>
        <h2>Props Features for Employee object</h2>
        <hr />
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Employee : {isEmployee ? "Yes" : "No"}</p>
    </div>
  )
}

PropsInfo.propTypes = {
    name : "Guest",
    age : 0,
    isEmployee : false
}

export default PropsInfo

