import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminNavbar() {
    return (
    <div>
        <nav className='flex p-5 shadow-md'>
            <div className=''>
                <NavLink to='/' className={`font-bold text-2xl md:pl-10 pl-0 text-blue-800`}>
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
