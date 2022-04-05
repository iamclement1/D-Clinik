import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function AdminMobileSide() {
  return (
        <>
            <ul className='flex flex-col  text-lg text-white mt-8 ' style={{paddingLeft:"0"}}>
                <NavLink to='/' className='font-bold pb-10 text-white hover:bg-sky-700  border-solid border-zinc-100 border-b ' style={{display:"flex"}} >
                    <FontAwesomeIcon className='ml-8' icon={faHouse} style={{marginRight:"5px"}} /> Dashboard
                </NavLink>
                
                <NavLink to='/' className='font-bold pb-10 text-white hover:bg-sky-700 mt-8 border-solid border-zinc-100 border-b '>
                    <FontAwesomeIcon className='ml-8' icon={faAddressCard} style={{marginRight:"5px"}} /> Appointment
                </NavLink>
            </ul>
        </>
  )
}

export default AdminMobileSide