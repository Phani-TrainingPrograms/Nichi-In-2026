import { useState } from 'react'
import EmployeeList from './components/EmployeeList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
function App() {
  return (
    <>
    <div>
      <h1>Employee manager Software</h1>
      <hr />
      <EmployeeList/>
    </div>
    </>
  )
}

export default App
