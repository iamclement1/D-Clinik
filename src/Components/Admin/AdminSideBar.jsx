import React, { useState } from 'react'

function AdminSideBar() {

    const [ isOpen , setIsOpen ] = useState(false);
    
    return (

        <>
        { isOpen ? (
            <button className='flex text-4xl text-white items-center cursor-pointer
            fixed left-10 top-6 z-50'
            onClick={() => setIsOpen(!isOpen)}>
                x
            </button>
        ) : (
            <svg onClick={() => setIsOpen (!isOpen)}
            className='fixed z-30 flex items-center cursor-pointer left-10 top-6'
            fill='#2563eb'
            viewBox='0 0 100 80'
            width={40}
            height={40}>
                <rect width={100} height={10}></rect>
                <rect y={30} width={100} height={10}></rect>
                <rect y={60} width={100} height={10}></rect>
            </svg>
        )}

        <div className= {`top-0 left-0 w-[20vw] bg-blue-600 pt-20 p-3 text-white
        fixed h-full z-40 ease-in-out duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2>I am a AdminSideBar</h2>
        </div>
        </>
)
}

export default AdminSideBar
