import React, { useState } from 'react'

function AdminSideBar() {

    const [ isOpen , setIsOpen ] = useState(false);
    
    return (

        <>
        { !isOpen ? (
            <button className='flex text-4xl text-white items-center cursor-pointer
            fixed right-10 top-6 z-50'
            onClick={() => setIsOpen(!isOpen)}>
                x
            </button>
        ) : (
            <svg onClick={() => setIsOpen (!isOpen)}
            className='fixed z-30 flex items-center cursor-pointer right-10 top-6'
            fill='#2563eb'
            viewBox='0 0 100 80'
            width={40}
            height={40}>
                <rect width={100} height={10}></rect>
                <rect y={30} width={100} height={10}></rect>
                <rect y={60} width={100} height={10}></rect>
            </svg>
        )}

        <div className={`top-0 right-0 w-[20vw] bg-blue-600
        text-white fixed h-full z-40 ease-in-out duration-300
        ${ !isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2 className='mt-20 text-sm font-semibold text-white'>
                I am a AdminSideBar
            </h2>
        </div>
        </>
)
}

export default AdminSideBar
