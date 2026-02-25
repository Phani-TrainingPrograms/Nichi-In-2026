import React from 'react'

export default function Header() {
  return (
    <div>
        <h1>Welcome to React Training</h1>
        <hr/>
        <nav>
            <a className ="btn btn-info m-2" href='#'>Home</a>
            <a className ="btn btn-primary m-2"  href='#'>About Us</a>
            <a className ="btn btn-secondary m-2"  href='#'>Contact us</a>
        </nav>
    </div>
  )
}
