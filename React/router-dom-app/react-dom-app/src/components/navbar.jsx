import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
            <div className="container">
                <Link to={"/"} className='navbar-brand'>
                    <i className="fa fa-mobile-phone" aria-hidden="true"></i>
                    Contact App
                </Link>
            </div>
        </nav>
    </div>
  )
}
