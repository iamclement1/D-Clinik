import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function AdminSideBar() {

    const [ isOpen , setIsOpen ] = useState(false);
    
    return (

            <>
            { !isOpen ? (
                <button className='flex text-xl text-white items-center cursor-pointer
                fixed right-10 top-6 z-50'
                onClick={() => setIsOpen(!isOpen)}>
                    x
                </button>
            ) : (
                <svg onClick={() => setIsOpen (!isOpen)}
                className='fixed z-30 flex items-center cursor-pointer right-10 top-6'
                fill='#2563eb'
                viewBox='0 0 100 80'
                width={20}
                height={20}>
                    <rect width={100} height={10}></rect>
                    <rect y={30} width={100} height={10}></rect>
                    <rect y={60} width={100} height={10}></rect>
                </svg>
            )}

            <div className={`top-0 right-0 md:w-[17vw] w-[] bg-blue-800
            text-white fixed h-full z-40 md:p-10 p-3 ease-in-out duration-300
            ${ !isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <h2 className='mt-10 md:text-2xl text-sm font-bold text-white'>
                    D'Clinik
                </h2>
                <p className='text-xs'>Home of hospitality</p>
                <ul className='flex flex-col pt-12 text-sm'>
                    <NavLink to='/' className='font-bold pb-3'>
                        <FontAwesomeIcon icon={faHouse} /> Dashboard
                    </NavLink>
                    
                    <NavLink to='/' className='font-bold'>
                        <FontAwesomeIcon icon={faAddressCard} /> About 
                    </NavLink>
                    <NavLink to='/' className='font-bold'>Contact</NavLink>
                    <NavLink to='/' className='font-bold'>Sign In</NavLink>
                    <NavLink to='/' className='font-bold'>Register</NavLink>
                    <NavLink to='/' className='font-bold'>Home</NavLink>
                </ul>
            </div>
            </>
)
}

export default AdminSideBar

