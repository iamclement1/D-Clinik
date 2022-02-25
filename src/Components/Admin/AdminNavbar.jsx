import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminNavbar() {
    return (
    <div>
        <nav className='relative flex p-5 shadow-md'>
            <div className=''>
                <NavLink to='/' className={`font-bold text-2xl pl-10 text-blue-800`}>
                    D'Clinik
                </NavLink>
            </div>
            {/* <div className=''>
                icons
            </div> */}
        </nav>
    </div>
  )
}

export default AdminNavbar
