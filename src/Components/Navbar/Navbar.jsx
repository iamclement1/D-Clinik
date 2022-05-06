import { faBars, faBell, faHospital } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <div className=''>
        <div className="container-xxl position-relative p-0 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark
            px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to='/' className='navbar-brand p-3 space-x-3 text-white'>
                    <FontAwesomeIcon icon={faHospital} 
                    className='px-lg-3 px-0'/>
                        D'Clinik
                </NavLink>

                <button className='navbar-toggler text-white'
                type='button'
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                    <FontAwesomeIcon icon={ faBars }
                    className="text-white" />

                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 px-3 text-start">
                        <NavLink to="/"
                        className="nav-item nav-link text-white">
                            <FontAwesomeIcon icon={ faBell } />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
