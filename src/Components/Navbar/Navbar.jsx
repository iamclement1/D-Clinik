import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <div className='row'>
        <div className="container-xxl position-relative p-0 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-light
            px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to='/' className='navbar-brand p-3'>
                    <h2 className="text-primary">
                        D'Clinik
                    </h2>
                </NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
