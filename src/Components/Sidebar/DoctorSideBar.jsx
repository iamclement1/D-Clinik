import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AdminSideBar from '../../Components/Sidebar/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function DoctorSideBar() {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                <div className={`top-45 left-0 md:w-[16.5vw] w-[] bg-blue-800
                    text-white fixed h-full z-30`}>
                        <ul className='flex flex-col  text-lg text-white' style={{paddingLeft:"0"}}>
                            <NavLink to='/' className='font-bold pb-10 mt-8 text-white hover:bg-sky-700  border-solid border-zinc-100 border-b ' style={{display:"flex"}} >
                                <FontAwesomeIcon className='ml-8' icon={faHouse} style={{marginRight:"5px"}} /> Dashboard
                            </NavLink>
                            
                            <NavLink to='/' className='font-bold pb-10 text-white hover:bg-sky-700 mt-8 border-solid border-zinc-100 border-b '>
                                <FontAwesomeIcon className='ml-8' icon={faAddressCard} style={{marginRight:"5px"}} /> Appointment
                            </NavLink>
                        </ul>
                    </div>
                </div>
              
            </div>
       
        </>
  )
}

export default DoctorSideBar
