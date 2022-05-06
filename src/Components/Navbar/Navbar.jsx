import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <div className=''>
        <div className="container-xxl position-relative p-0 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-light
            px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to='/' className='navbar-brand p-3'>
                    <h2 className="text-primary">
                        D'Clinik
                    </h2>
                </NavLink>

                <button className='navbar-toggler'
                type='button'
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                    <FontAwesomeIcon icon={ faBars } />

                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 px-3 text-start">
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
