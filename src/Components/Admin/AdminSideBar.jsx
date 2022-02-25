import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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

        <div className={`top-0 right-0 w-[15vw] bg-blue-800
        text-white fixed h-full z-40 p-10 ease-in-out duration-300
        ${ !isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* <h2 className='mt-20 text-sm font-semibold text-white'>
                I am a AdminSideBar
            </h2> */}
            <ul className='flex flex-col'>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
                <NavLink to='/' className='text-xl font-bold'>Home</NavLink>
            </ul>
        </div>
        </>
)
}

export default AdminSideBar
